import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useSwipeable } from 'react-swipeable';
import './Carousel.scss';

export interface CarouselItem {
  content: React.ReactNode;
  title?: string;
  disableFullScreen?: boolean;
}

interface CarouselProps {
  items: CarouselItem[];
  className?: string;
  contentClassName?: string;
  onSlide?: (index: number) => void;
}

export const Carousel: React.FC<CarouselProps> = ({ items, className = '', contentClassName = '', onSlide }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const modalViewportRef = useRef<HTMLDivElement>(null);
  const isJumping = useRef(false);
  const isModalJumping = useRef(false);

  const hasLoop = items.length > 1;
  const domOffset = hasLoop ? 1 : 0;
  const slides = (hasLoop ? [items[items.length - 1], ...items, items[0]] : items) as CarouselItem[];
  const prevDomIndexRef = useRef(domOffset);

  const domToLogical = (domIdx: number): number => {
    if (!hasLoop) return domIdx;
    if (domIdx === 0) return items.length - 1;
    if (domIdx === items.length + 1) return 0;
    return domIdx - 1;
  };

  const pauseSlideMedia = (container: HTMLElement | null, domIndex: number) => {
    const slide = container?.children[domIndex] as HTMLElement | undefined;
    if (!slide) return;
    slide.querySelectorAll('video').forEach(v => v.pause());
    slide.querySelectorAll('iframe').forEach(iframe =>
      iframe.contentWindow?.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo', args: '' }), '*')
    );
  };

  // ── Main carousel: initial scroll position ──────────────────────────────
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !hasLoop) return;

    let mounted = true;
    let initialLoadDone = false;

    const resizeObserver = new ResizeObserver(() => {
        if (!mounted || initialLoadDone) return;
        
        if (viewport.clientWidth > 0) {
           initialLoadDone = true;
           isJumping.current = true;
           viewport.style.scrollBehavior = 'auto';
           viewport.scrollLeft = viewport.clientWidth;
           
           requestAnimationFrame(() => {
             if (!mounted) return;
             viewport.style.scrollBehavior = '';
             requestAnimationFrame(() => {
               if (mounted) isJumping.current = false;
             });
           });
        }
    });
    
    resizeObserver.observe(viewport);

    return () => {
      mounted = false;
      resizeObserver.disconnect();
    };
  }, [hasLoop]);

  // ── Main carousel: scroll handler ───────────────────────────────────────
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const handleScroll = () => {
      if (isJumping.current) return;
      const domIndex = Math.round(viewport.scrollLeft / viewport.clientWidth);
      if (domIndex === prevDomIndexRef.current) return;

      pauseSlideMedia(viewport, prevDomIndexRef.current);
      prevDomIndexRef.current = domIndex;

      const logicalIndex = domToLogical(domIndex);
      setCurrentIndex(logicalIndex);
      onSlide?.(logicalIndex);

      if (hasLoop && (domIndex === 0 || domIndex === items.length + 1)) {
        const targetDom = domIndex === 0 ? items.length : 1;
        requestAnimationFrame(() => {
          isJumping.current = true;
          viewport.style.scrollBehavior = 'auto';
          viewport.scrollLeft = targetDom * viewport.clientWidth;
          prevDomIndexRef.current = targetDom;
          requestAnimationFrame(() => {
            viewport.style.scrollBehavior = '';
            isJumping.current = false;
          });
        });
      }
    };

    viewport.addEventListener('scroll', handleScroll, { passive: true });
    return () => viewport.removeEventListener('scroll', handleScroll);
  }, [onSlide, items.length, hasLoop]);

  // ── Modal viewport: scroll handler ──────────────────────────────────────
  useEffect(() => {
    const viewport = modalViewportRef.current;
    if (!viewport || !isFullScreen) return;

    const handleScroll = () => {
      if (isModalJumping.current) return;
      const idx = Math.round(viewport.scrollLeft / viewport.clientWidth);
      setModalIndex(idx);
    };

    viewport.addEventListener('scroll', handleScroll, { passive: true });
    return () => viewport.removeEventListener('scroll', handleScroll);
  }, [isFullScreen]);

  // ── Modal viewport: scroll to index when modalIndex changes externally ──
  const modalScrollTo = (index: number) => {
    const viewport = modalViewportRef.current;
    if (!viewport) return;
    pauseSlideMedia(viewport, modalIndex);
    viewport.scrollTo({ left: index * viewport.clientWidth, behavior: 'smooth' });
  };

  const scrollToIndex = (logicalIndex: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    pauseSlideMedia(viewport, prevDomIndexRef.current);
    viewport.scrollTo({ left: (logicalIndex + domOffset) * viewport.clientWidth, behavior: 'smooth' });
  };

  const nextMain = () => scrollToIndex((currentIndex + 1) % items.length);
  const prevMain = () => scrollToIndex((currentIndex - 1 + items.length) % items.length);

  const navigateModal = (delta: number) => {
    const nextIndex = (modalIndex + delta + items.length) % items.length;
    modalScrollTo(nextIndex);
  };

  const toggleFullScreen = (index?: number) => {
    if (!isFullScreen) {
      const startIndex = index ?? currentIndex;
      setModalIndex(startIndex);
      // After the portal renders, jump the modal viewport to the right slide instantly
      requestAnimationFrame(() => {
        const viewport = modalViewportRef.current;
        if (!viewport) return;
        isModalJumping.current = true;
        viewport.style.scrollBehavior = 'auto';
        viewport.scrollLeft = startIndex * viewport.clientWidth;
        requestAnimationFrame(() => {
          viewport.style.scrollBehavior = '';
          isModalJumping.current = false;
        });
      });
    } else {
      const viewport = modalViewportRef.current;
      pauseSlideMedia(viewport, modalIndex);
    }
    setIsFullScreen(prev => !prev);
  };

  const modalSwipeHandlers = useSwipeable({
    onSwipedLeft: () => navigateModal(1),
    onSwipedRight: () => navigateModal(-1),
    trackMouse: true,
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') isFullScreen ? navigateModal(1) : nextMain();
      else if (e.key === 'ArrowLeft') isFullScreen ? navigateModal(-1) : prevMain();
      else if (e.key === 'Escape' && isFullScreen) {
        const viewport = modalViewportRef.current;
        pauseSlideMedia(viewport, modalIndex);
        setIsFullScreen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isFullScreen, currentIndex, modalIndex, items.length]);

  if (!items.length) return null;

  return (
    <section className={`carousel-container ${className}`}>
      <div ref={viewportRef} className="carousel-viewport">
        {slides.map((item, domIndex) => (
          <div key={domIndex} className={`carousel-item ${contentClassName}`}>
            <div className="carousel-header">
              {item.title ? <h3 className="mb-0">{item.title}</h3> : <div />}
              {!item.disableFullScreen && (
                <button onClick={() => toggleFullScreen(domToLogical(domIndex))} className="button btn-text text-lg">
                  Full screen
                </button>
              )}
            </div>
            <div
              className="flex-1 min-h-0 w-full relative"
              onClick={!item.disableFullScreen ? () => toggleFullScreen(domToLogical(domIndex)) : undefined}
              style={{ cursor: !item.disableFullScreen ? 'pointer' : 'default' }}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button onClick={prevMain} className="button text-lg" disabled={items.length <= 1}>{'<'}</button>
        <span className="h4">{currentIndex + 1}/{items.length}</span>
        <button onClick={nextMain} className="button text-lg" disabled={items.length <= 1}>{'>'}</button>
      </div>

      {isFullScreen && createPortal(
        <div
          className="carousel-modal-overlay"
          style={{ backgroundColor: 'hsla(var(--color-surface-hsl), 0.99)' }}
        >
          <button
            onClick={() => toggleFullScreen()}
            className="carousel-modal-close"
          >✕</button>

          <div className="carousel-modal-title-wrapper">
            {items[modalIndex]?.title && <h2 className="text-xl">{items[modalIndex]?.title}</h2>}
          </div>

          <button onClick={() => navigateModal(-1)} className="carousel-modal-nav nav-prev">{'<'}</button>

          <div {...modalSwipeHandlers} className="carousel-modal-swipe-wrapper">
            <div
              ref={modalViewportRef}
              className="carousel-modal-viewport"
            >
              {items.map((item, index) => (
                <div key={index} className="carousel-modal-item">
                  <div className="carousel-modal-item-content">{item.content}</div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => navigateModal(1)} className="carousel-modal-nav nav-next">{'>'}</button>

          <div className="carousel-modal-pager">
            {modalIndex + 1} / {items.length}
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};
