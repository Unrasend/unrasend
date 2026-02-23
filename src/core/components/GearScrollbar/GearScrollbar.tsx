import React, { useEffect, useRef, useState } from 'react';
import { CustomScroll } from 'react-custom-scroll';
import { screenSizes$ } from '../../utils/mediaQuery.util';
import './GearScrollbar.scss';

interface GearScrollbarProps {
  mainContent: React.ReactNode;
  footerContent?: React.ReactNode;
}

const GearScrollbar: React.FC<GearScrollbarProps> = ({ mainContent, footerContent }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const gearRef = useRef<HTMLImageElement>(null);
  const [hideGearAndRack, setHideGearAndRack] = useState(false);

  useEffect(() => {
    const subscription = screenSizes$.subscribe(sizes => {
      setHideGearAndRack(sizes.xs || sizes.sm);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const innerContainer = scrollRef.current?.querySelector('.rcs-inner-container');
    if (!innerContainer) return;

    let reqId: number | null = null;
    let lastScrollY = innerContainer.scrollTop;

    const updateRotation = () => {
      if (gearRef.current && scrollRef.current) {
        const degsPerPx = 360 / (18 * 8.5);
        const gearCenterY = gearRef.current.offsetTop + 28;
        const rackStartY = 12.75;
        const totalDistance = lastScrollY + (gearCenterY - rackStartY);
        
        gearRef.current.style.transform = `rotate(-${(totalDistance * degsPerPx) + 175}deg) translateZ(0)`;
      }
      reqId = null;
    };

    updateRotation();

    const onScroll = () => {
      lastScrollY = innerContainer.scrollTop;
      if (!reqId) {
        reqId = requestAnimationFrame(updateRotation);
      }
    };
    
    innerContainer.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      innerContainer.removeEventListener('scroll', onScroll);
      if (reqId) cancelAnimationFrame(reqId);
    };
  }, []);

  return (
    <div className="relative w-full h-full gear-scrollbar-container" ref={scrollRef}>
      {!hideGearAndRack && <div className="gear" ref={gearRef} />}
      <CustomScroll heightRelativeToParent="100%">
        <div className="flex flex-col min-h-full">
          <div className="page flex-grow">
            {!hideGearAndRack && <div className="rack" />}
            <div className="content">
              {mainContent}
            </div>
          </div>
          {footerContent && footerContent}
        </div>
      </CustomScroll>
    </div>
  );
};

export default GearScrollbar;
