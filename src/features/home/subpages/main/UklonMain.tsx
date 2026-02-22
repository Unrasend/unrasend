import React from 'react';
import { ProjectMainLayout } from '../../components/ProjectMainLayout';
import uklon1 from '../../../../assets/images/uklon/1.jpg';
import uklon2 from '../../../../assets/images/uklon/2.jpg';
import uklon3 from '../../../../assets/images/uklon/3.jpg';
import uklon4 from '../../../../assets/images/uklon/4.jpg';
import uklon5 from '../../../../assets/images/uklon/5.jpg';

export const UklonMain = () => (
  <ProjectMainLayout
    title="Uklon. 2021 - 2022"
    links={[{ label: 'Website', url: 'https://uklon.com.ua/business/' }]}
    description="Corporate portal for ride hailing platform, which serviced 130+ millions rides per year."
    carouselItems={[
      {
        title: 'Sign in',
        content: <img src={uklon1} alt="Uklon Screenshot 1" className="project-demo-content" />
      },
      {
        title: 'Dashboard with spending detailed insights',
        content: <img src={uklon2} alt="Uklon Screenshot 2" className="project-demo-content" />
      },
      {
        title: 'Add balance flow',
        content: <img src={uklon3} alt="Uklon Screenshot 3" className="project-demo-content" />
      },
      {
        title: 'Rides history report',
        content: <img src={uklon4} alt="Uklon Screenshot 4" className="project-demo-content" />
      },
      {
        title: 'Detailed ride view modal overlay',
        content: <img src={uklon5} alt="Uklon Screenshot 5" className="project-demo-content" />
      }
    ]}
  />
);
