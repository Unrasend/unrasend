
import React from 'react';
import { Carousel } from '../../../../core/components/Carousel/Carousel';
import planner1 from '../../../../assets/images/planner5d/1.png';
import planner2 from '../../../../assets/images/planner5d/2.png';
import planner3 from '../../../../assets/images/planner5d/3.png';

export const Planner5dMain = () => (
  <article className="flex flex-wrap">
    <h3 className="w-[50%]">Planner 5D - Home Design Tool. 2024 - ongoing</h3>
    <a className="flex w-[50%] items-center justify-end text-lg" href="http://planner5.com" target="_blank">Website</a>

    <p className="flex-1 block">Advanced 2D/3D home design tool used by ~65.5M of users.</p>

    <Carousel className="mt-4 h-[60vh]" contentClassName="relative z-20" items={[
      {
        title: 'Commenting Project Items',
        content: (
          <iframe
            className="w-full h-full aspect-video relative z-20"
            src="https://www.youtube.com/embed/7kjqn_WcpKA"
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
        content: <img src={planner1} alt="Planner 5D Screenshot 1" className="w-full h-full object-contain relative z-20" />
      },
      {
        title: '3D Editing Mode',
        content: <img src={planner3} alt="Planner 5D Screenshot 3" className="w-full h-full object-contain relative z-20" />
      },
      {
        title: 'Design Contest Vote',
        content: <img src={planner2} alt="Planner 5D Screenshot 2" className="w-full h-full object-contain relative z-20" />
      },
    ]} />

  </article>
);
