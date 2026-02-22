import React from 'react';
import { ProjectMainLayout } from '../../components/ProjectMainLayout';
import scoperty1 from '../../../../assets/images/scoperty/1.jpg';
import scoperty2 from '../../../../assets/images/scoperty/2.jpg';
import scoperty3 from '../../../../assets/images/scoperty/3.jpg';

export const ScopertyMain = () => (
  <ProjectMainLayout
    title="Scoperty.de. 2019 - 2021"
    links={[{ label: 'Website', url: 'https://djangostars.com/case-studies/scoperty/' }]}
    description="German real estate platform, offering map-based search and dashboard for real estate agents."
    carouselItems={[
      {
        title: 'Scoperty.de Demo',
        disableFullScreen: true,
        content: (
          <iframe
            className="project-demo-content aspect-video"
            src="https://www.youtube.com/embed/j8DJDbCal4Y?enablejsapi=1"
            title="Scoperty.de Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ),
      },
      {
        title: '2d Editing Mode',
        content: <img src={scoperty1} alt="Scoperty.de Screenshot 1" className="project-demo-content" />
      },
      {
        title: '3D Editing Mode',
        content: <img src={scoperty2} alt="Scoperty.de Screenshot 2" className="project-demo-content" />
      },
      {
        title: 'Design Contest Vote',
        content: <img src={scoperty3} alt="Scoperty.de Screenshot 3" className="project-demo-content" />
      },
    ]}
  />
);
