
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export interface CarouselItem {
  content: React.ReactNode;
  title?: string;
  hasFullScreenOverlay?: boolean;
}

interface CarouselProps {
  items: CarouselItem[];
  className?: string;
  contentClassName?: string;
}

import './Carousel.scss';

export const Carousel: React.FC<CarouselProps> = ({ items, className = '', contentClassName = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const next = () => {
    if (isFullScreen) {
      setModalIndex((prev) => (prev + 1) % items.length);
    } else {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }
  };

  const prev = () => {
    if (isFullScreen) {
      setModalIndex((prev) => (prev - 1 + items.length) % items.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      setModalIndex(currentIndex);
    }
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        if (isFullScreen) {
          setModalIndex((prev) => (prev + 1) % items.length);
        } else {
          setCurrentIndex((prev) => (prev + 1) % items.length);
        }
      } else if (event.key === 'ArrowLeft') {
        if (isFullScreen) {
          setModalIndex((prev) => (prev - 1 + items.length) % items.length);
        } else {
          setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
        }
      } else if (event.key === 'Escape' && isFullScreen) {
        setIsFullScreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [items.length, isFullScreen]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className={`w-full flex flex-col ${className}`}>
      <div className="carousel-viewport">
        <div
          className={`carousel-track ${contentClassName}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="carousel-item">
              <div className="flex justify-between items-center mb-sm">
                {item.title ? <h3 className="mb-0">{item.title}</h3> : <div></div>}
                <button onClick={toggleFullScreen} className="link text-lg">Full screen</button>
              </div>
              <div className="flex-1 min-h-0 w-full relative group">
                {item.content}
              </div>
            </div>
          ))}
        </div>
        {items[currentIndex]?.hasFullScreenOverlay !== false && (
          <div 
            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer z-30"
            onClick={toggleFullScreen}
          >
            <span 
              className="text-lg font-bold px-4 py-2 rounded border shadow-lg"
              style={{ 
                backgroundColor: 'var(--c-bg-2)', 
                color: 'var(--c-f-1)',
                borderColor: 'var(--c-f-1)' 
              }}
            >
              Click to enter Full Screen mode
            </span>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mt-md">
        <button onClick={prev} className="button text-lg" disabled={items.length <= 1}>{'<'}</button>
        <span className="h4">{currentIndex + 1}/{items.length}</span>
        <button onClick={next} className="button text-lg" disabled={items.length <= 1}>{'>'}</button>
      </div>

      {isFullScreen && createPortal(
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-md"
          style={{ backgroundColor: 'hsla(var(--c-bg-1-hsl), 0.99)' }}
        >
          <button
            onClick={toggleFullScreen}
            className="absolute top-md right-md text-2xl text-white hover:opacity-80 z-50 pointer-events-auto cursor-pointer"
          >
            ✕
          </button>

          <div className="absolute top-md left-1/2 -translate-x-1/2 text-center w-full max-w-[80%]">
             {items[modalIndex]?.title && <h2 className="text-white text-xl">{items[modalIndex]?.title}</h2>}
          </div>

          <button
            onClick={prev}
            className="absolute left-md top-1/2 -translate-y-1/2 text-4xl text-white hover:opacity-80 z-50 cursor-pointer"
          >
            {'<'}
          </button>

          <div className="carousel-viewport w-[80%] h-[80%] pointer-events-auto">
            <div
              className="carousel-track h-full transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${modalIndex * 100}%)` }}
            >
              {items.map((item, index) => (
                <div key={index} className="carousel-item h-full flex items-center justify-center">
                  <div className="w-full h-[80%]">
                     {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

           <button
            onClick={next}
            className="absolute right-md top-1/2 -translate-y-1/2 text-4xl text-white hover:opacity-80 z-50 cursor-pointer"
          >
            {'>'}
          </button>

           <div className="absolute bottom-md left-1/2 -translate-x-1/2 text-white text-lg">
             {modalIndex + 1} / {items.length}
           </div>
        </div>,
        document.body
      )}
    </section>
  );
};
