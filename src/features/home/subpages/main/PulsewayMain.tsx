
import React from 'react';
import { Carousel } from '../../../../core/components/Carousel/Carousel';
import pulseway1 from '../../../../assets/images/pulseway/1.png';
import pulseway2 from '../../../../assets/images/pulseway/2.png';
import pulseway3 from '../../../../assets/images/pulseway/3.png';

export const PulsewayMain = () => (
  <article className="flex flex-wrap">
    <h3 className="w-[50%]">Pulseway - RMM Software. 2023 - 2024</h3>
    <div className="flex w-[50%] items-center justify-end gap-2">
      <a className="text-lg" href="https://www.pulseway.com/" target="_blank">Website</a>
      <span>|</span>
      <a className="text-lg" href="https://www.pulseway.com/products/whats-new" target="_blank">Release Notes</a>
    </div>

    <p className="flex-1 block">Remote Monitoring and Management (RMM) software for MSPs and IT departments, used by 13,000+ customers.</p>

    <Carousel className="mt-4 h-[60vh]" contentClassName="relative z-20" items={[
      {
        title: 'Pulseway Demo',
        content: (
          <iframe
            className="w-full h-full aspect-video relative z-20"
            src="https://www.youtube.com/embed/SiXyRSosGck"
            title="Planner 5D Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ),
        hasFullScreenOverlay: false
      },
      {
        title: '2d Editing Mode',
        content: <img src={pulseway1} alt="Pulseway Screenshot 1" className="w-full h-full object-contain relative z-20" />
      },
      {
        title: '3D Editing Mode',
        content: <img src={pulseway2} alt="Pulseway Screenshot 2" className="w-full h-full object-contain relative z-20" />
      },
      {
        title: 'Design Contest Vote',
        content: <img src={pulseway3} alt="Pulseway Screenshot 3" className="w-full h-full object-contain relative z-20" />
      },
    ]} />
  </article>
);
