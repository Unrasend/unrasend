import React, { useEffect, useRef } from 'react';
import './AnimatedGears.scss';

const AnimatedGears: React.FC = () => {
  const gear1Ref = useRef<HTMLDivElement>(null);
  const gear2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = document.querySelector('.rcs-inner-container');

    if (!scrollContainer) {
      return;
    }

    const handleScroll = (event: Event) => {
      const target = event.target as HTMLElement;
      const scrollY = target.scrollTop;
      
      if (gear1Ref.current) {
        gear1Ref.current.style.transform = `rotate(${scrollY * 2.5}deg)`;
      }
      if (gear2Ref.current) {
        gear2Ref.current.style.transform = `rotate(-${scrollY * 2.5}deg)`;
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="animated-gears">
      <div ref={gear1Ref} className="gear gear1" />
      <div ref={gear2Ref} className="gear gear2" />
    </div>
  );
};

export default AnimatedGears;
