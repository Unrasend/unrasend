import React from 'react';
import { ProjectMainLayout } from '../../components/ProjectMainLayout';

export const ItTransitMain = () => (
  <ProjectMainLayout
    title="IT-Transit. 2016 - 2019"
    links={[{ label: 'Website', url: 'https://it-transit.com/en/' }]}
    description="Map editing platform for different fuel and energy complexes."
    carouselItems={[
      {
        title: 'Drawing polygons with smart snapping',
        disableFullScreen: true,
        content: (
          <iframe
            className="project-demo-content aspect-video"
            src="https://www.youtube.com/embed/frW39iEnKns"
            title="IT-Transit Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )
      },
      {
        title: 'Notes taking',
        disableFullScreen: true,
        content: (
          <iframe
            className="project-demo-content aspect-video"
            src="https://www.youtube.com/embed/nML_kRnMafw"
            title="IT-Transit Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )
      },
      {
        title: 'Measuring distances',
        disableFullScreen: true,
        content: (
          <iframe
            className="project-demo-content aspect-video"
            src="https://www.youtube.com/embed/sKWf0LYEE4o"
            title="IT-Transit Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )
      },
      {
        title: 'Legend, switching layers, export to pdf',
        disableFullScreen: true,
        content: (
          <iframe
            className="project-demo-content aspect-video"
            src="https://www.youtube.com/embed/A8Jhw3jdCJ8"
            title="IT-Transit Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )
      }
    ]}
  />
);
