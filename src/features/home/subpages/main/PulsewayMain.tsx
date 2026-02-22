import React from 'react';
import { ProjectMainLayout } from '../../components/ProjectMainLayout';
import pulseway1 from '../../../../assets/images/pulseway/1.png';
import pulseway2 from '../../../../assets/images/pulseway/2.png';
import pulseway3 from '../../../../assets/images/pulseway/3.png';

export const PulsewayMain = () => (
  <ProjectMainLayout
    title="Pulseway - RMM Software. 2023 - 2024"
    links={[
      { label: 'Website', url: 'https://www.pulseway.com/' },
      { label: 'Release Notes', url: 'https://www.pulseway.com/products/whats-new' }
    ]}
    description="Remote Monitoring and Management (RMM) software for MSPs and IT departments, used by 13,000+ customers."
    carouselItems={[
      {
        title: 'Pulseway Demo',
        disableFullScreen: true,
        content: (
          <iframe
            className="project-demo-content aspect-video"
            src="https://www.youtube.com/embed/SiXyRSosGck?enablejsapi=1"
            title="Pulseway Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ),
      },
      {
        title: 'Advanced System View',
        content: <img src={pulseway1} alt="Pulseway Screenshot 1" className="project-demo-content" />
      },
      {
        title: 'System View',
        content: <img src={pulseway2} alt="Pulseway Screenshot 2" className="project-demo-content" />
      },
      {
        title: 'Executed flows on systems',
        content: <img src={pulseway3} alt="Pulseway Screenshot 3" className="project-demo-content" />
      },
    ]}
  />
);
