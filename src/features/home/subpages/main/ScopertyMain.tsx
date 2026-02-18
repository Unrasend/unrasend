
import React from 'react';
import { Carousel } from '../../../../core/components/Carousel/Carousel';
import scoperty1 from '../../../../assets/images/scoperty/1.jpg';
import scoperty2 from '../../../../assets/images/scoperty/2.jpg';
import scoperty3 from '../../../../assets/images/scoperty/3.jpg';

export const ScopertyMain = () => (
  <article className="flex flex-wrap">
    <h3 className="w-[50%]">Scoperty.de. 2019 - 2021</h3>
    <a className="flex w-[50%] items-center justify-end text-lg" href="https://djangostars.com/case-studies/scoperty/" target="_blank">Website</a>

    <p className="flex-1 block">German real estate platform, offering map-based search and dashboard for real estate agents.</p>

    <Carousel className="mt-4 h-[60vh]" contentClassName="relative z-20" items={[
      {
        title: 'Commenting Project Items',
        content: (
          <iframe
            className="w-full h-full aspect-video relative z-20"
            src="https://www.youtube.com/embed/j8DJDbCal4Y"
            title="Scoperty.de Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ),
        hasFullScreenOverlay: false
      },
      {
        title: '2d Editing Mode',
        content: <img src={scoperty1} alt="Scoperty.de Screenshot 1" className="w-full h-full object-contain relative z-20" />
      },
      {
        title: '3D Editing Mode',
        content: <img src={scoperty2} alt="Scoperty.de Screenshot 2" className="w-full h-full object-contain relative z-20" />
      },
      {
        title: 'Design Contest Vote',
        content: <img src={scoperty3} alt="Scoperty.de Screenshot 3" className="w-full h-full object-contain relative z-20" />
      },
    ]} />

  </article>
);
