import React from 'react';
import { ProjectMainLayout } from '../../components/ProjectMainLayout';
import planner1 from '../../../../assets/images/planner5d/1.png';
import planner2 from '../../../../assets/images/planner5d/2.png';
import planner3 from '../../../../assets/images/planner5d/3.png';

export const Planner5dMain = () => (
  <ProjectMainLayout
    title="Planner 5D - Home Design Tool. 2024 - now"
    links={[{ label: 'Website', url: 'http://planner5.com' }]}
    description="Advanced 2D/3D home design tool used by ~65.5M of users."
    carouselItems={[
      {
        title: 'Commenting Project Items',
        disableFullScreen: true,
        content: (
          <iframe
            className="project-demo-content aspect-video"
            src="https://www.youtube.com/embed/7kjqn_WcpKA?enablejsapi=1"
            title="Planner 5D Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ),
      },
      {
        title: '2d Editing Mode',
        content: <img src={planner1} alt="Planner 5D Screenshot 1" className="project-demo-content" />
      },
      {
        title: '3D Editing Mode',
        content: <img src={planner3} alt="Planner 5D Screenshot 3" className="project-demo-content" />
      },
      {
        title: 'Design Contest Vote',
        content: <img src={planner2} alt="Planner 5D Screenshot 2" className="project-demo-content" />
      },
    ]}
  />
);
