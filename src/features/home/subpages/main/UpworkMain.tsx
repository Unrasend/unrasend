import React from 'react';
import { ProjectMainLayout } from '../../components/ProjectMainLayout';
import upwork1 from '../../../../assets/images/upwork/1.png';
import upwork2 from '../../../../assets/images/upwork/2.png';
import upwork3 from '../../../../assets/images/upwork/3.png';
import upwork4 from '../../../../assets/images/upwork/4.png';
import upwork5 from '../../../../assets/images/upwork/5.png';
import upwork6 from '../../../../assets/images/upwork/6.png';
import upwork7 from '../../../../assets/images/upwork/7.png';
import upwork8 from '../../../../assets/images/upwork/8.png';
import upwork9 from '../../../../assets/images/upwork/9.png';

export const UpworkMain = () => (
  <ProjectMainLayout
    title="Upwork. 2022 - 2023"
    links={[{ label: 'Website', url: 'https://upwork.com/' }]}
    description="Freelance platform for connecting freelancers with clients worldwide serving millions of users."
    carouselItems={[
      {
        title: 'Sign Up Page',
        content: <img src={upwork1} alt="Upwork Screenshot 1" className="project-demo-content" />
      },
      {
        title: 'Creating Account Dashboard',
        content: <img src={upwork2} alt="Upwork Screenshot 2" className="project-demo-content" />
      },
      {
        title: 'Fill up freelancer details page',
        content: <img src={upwork3} alt="Upwork Screenshot 3" className="project-demo-content" />
      },
      {
        title: 'Resume import integration',
        content: <img src={upwork4} alt="Upwork Screenshot 4" className="project-demo-content" />
      },
      {
        title: 'Add skills from library',
        content: <img src={upwork5} alt="Upwork Screenshot 5" className="project-demo-content" />
      },
      {
        title: 'Experience detailed description overlay',
        content: <img src={upwork6} alt="Upwork Screenshot 6" className="project-demo-content" />
      },
      {
        title: 'Add education from library',
        content: <img src={upwork7} alt="Upwork Screenshot 7" className="project-demo-content" />
      },
      {
        title: 'Education detail overlay',
        content: <img src={upwork8} alt="Upwork Screenshot 8" className="project-demo-content" />
      },
      {
        title: 'Setup language proficiencies',
        content: <img src={upwork9} alt="Upwork Screenshot 9" className="project-demo-content" />
      }
    ]}
  />
);
