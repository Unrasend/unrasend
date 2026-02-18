
import React from 'react';
import { Carousel } from '../../../../core/components/Carousel/Carousel';

export const ItTransitMain = () => (
  <article className="flex flex-wrap">
    <h3 className="w-[50%]">IT-Transit. 2016 - 2019</h3>
    <a className="flex w-[50%] items-center justify-end text-lg" href="https://it-transit.com/en/" target="_blank">Website</a>

    <p className="flex-1 block">Map editing platform for different fuel and energy complexes.</p>

    <Carousel className="mt-4 h-[60vh]" contentClassName="relative z-20" items={[
      {
        title: 'Drawing polygons with smart snapping',
        content: (
          <iframe
            className="w-full h-full aspect-video relative z-20"
            src="https://www.youtube.com/embed/frW39iEnKns"
            title="IT-Transit Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ),
        hasFullScreenOverlay: false
      },
      {
        title: 'Notes taking',
        content: (
          <iframe
            className="w-full h-full aspect-video relative z-20"
            src="https://www.youtube.com/embed/nML_kRnMafw"
            title="IT-Transit Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ),
        hasFullScreenOverlay: false
      },
      {
        title: 'Measuring distances',
        content: (
          <iframe
            className="w-full h-full aspect-video relative z-20"
            src="https://www.youtube.com/embed/sKWf0LYEE4o"
            title="IT-Transit Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ),
        hasFullScreenOverlay: false
      },
      {
        title: 'Legend, switching layers, export to pdf',
        content: (
          <iframe
            className="w-full h-full aspect-video relative z-20"
            src="https://www.youtube.com/embed/A8Jhw3jdCJ8"
            title="IT-Transit Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ),
        hasFullScreenOverlay: false
      },
    ]} />

  </article>
);
