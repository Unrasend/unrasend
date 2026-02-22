import React, { useEffect, useRef } from 'react';
import { CustomScroll } from 'react-custom-scroll';
import gearsSvg from '../../../assets/icons/gear.svg';
import './GearScrollbar.scss';

interface GearScrollbarProps {
  children: React.ReactNode;
}

const GearScrollbar: React.FC<GearScrollbarProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const gearRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const innerContainer = scrollRef.current?.querySelector('.rcs-inner-container');
    if (!innerContainer) return;

    let reqId: number | null = null;
    let lastScrollY = innerContainer.scrollTop;

    const updateRotation = () => {
      if (gearRef.current && scrollRef.current) {
        // gear.svg has 18 teeth (20° spacing), rack pitch = 8.5px
        // degrees per pixel = 360 / (18 * 8.5) ≈ 2.353
        const degsPerPx = 360 / (18 * 8.5);

        // Calculate distance from rack start to gear center.
        // The rack starts at top: 12.75px (from SCSS)
        const gearCenterY = gearRef.current.offsetTop + 28;
        const rackStartY = 12.75;
        
        // Effective scroll distance for rotation calculation
        const totalDistance = lastScrollY + (gearCenterY - rackStartY);
        
        // We add a small constant adjustment (phase) to align the physical teeth.
        // 175 degrees aligns the gear tooth tip with the rack valley.
        gearRef.current.style.transform = `rotate(-${(totalDistance * degsPerPx) + 175}deg) translateZ(0)`;
      }
      reqId = null;
    };

    // Set initial
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
      <div className="gear" ref={gearRef} />
      <CustomScroll heightRelativeToParent="100%">
        <div className="page">
          <div className="rack" />
          <div className="content">
            {children}
          </div>
        </div>
      </CustomScroll>
    </div>
  );
};

export default GearScrollbar;
