
import React from 'react';
import { Carousel } from '../../../../core/components/Carousel/Carousel';
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
  <article className="flex flex-wrap">
    <h3 className="w-[50%]">Upwork. 2022 - 2023</h3>
    <a className="flex w-[50%] items-center justify-end text-lg" href="https://upwork.com/" target="_blank">Website</a>

    <p className="flex-1 block">Freelance platform for connecting freelancers with clients worldwide serving millions of users.</p>

    <Carousel className="mt-4 h-[60vh]" contentClassName="relative z-20" items={[
      {
        title: 'Sign Up Page',
        content: <img src={upwork1} alt="Upwork Screenshot 1" className="w-full h-full object-contain relative z-20" />
      },
      {
        title: 'Sign Up Page',
        content: <img src={upwork2} alt="Upwork Screenshot 2" className="w-full h-full object-contain relative z-20" />
      },
      {
        title: 'Onboarding',
        content: <img src={upwork3} alt="Upwork Screenshot 3" className="w-full h-full object-contain relative z-20" />
      },
      {
        title: 'Onboarding',
        content: <img src={upwork4} alt="Upwork Screenshot 4" className="w-full h-full object-contain relative z-20" />
      },
      {
        title: 'Onboarding',
        content: <img src={upwork5} alt="Upwork Screenshot 5" className="w-full h-full object-contain relative z-20" />
      },
      {
        title: 'Onboarding',
        content: <img src={upwork6} alt="Upwork Screenshot 6" className="w-full h-full object-contain relative z-20" />
      },
      {
        title: 'Onboarding',
        content: <img src={upwork7} alt="Upwork Screenshot 7" className="w-full h-full object-contain relative z-20" />
      },
      {
        title: 'Onboarding',
        content: <img src={upwork8} alt="Upwork Screenshot 8" className="w-full h-full object-contain relative z-20" />
      },
      {
        title: 'Onboarding',
        content: <img src={upwork9} alt="Upwork Screenshot 9" className="w-full h-full object-contain relative z-20" />
      },
    ]} />

  </article>
);
