
import React from 'react';
import { Carousel } from '../../../../core/components/Carousel/Carousel';
import uklon1 from '../../../../assets/images/uklon/1.jpg';
import uklon2 from '../../../../assets/images/uklon/2.jpg';
import uklon3 from '../../../../assets/images/uklon/3.jpg';
import uklon4 from '../../../../assets/images/uklon/4.jpg';
import uklon5 from '../../../../assets/images/uklon/5.jpg';

export const UklonMain = () => (
  <article className="flex flex-wrap">
    <h3 className="w-[50%]">Uklon. 2021 - 2022</h3>
    <a className="flex w-[50%] items-center justify-end text-lg" href="https://uklon.com.ua/business/" target="_blank">Website</a>

    <p className="flex-1 block">Corporate portal for ride hailing platform, which serviced 130+ millions rides per .</p>

    <Carousel className="mt-4 h-[60vh]" contentClassName="relative z-20" items={[
      {
        title: 'Sign in',
        content: <img src={uklon1} alt="Uklon Screenshot 1" className="w-full h-full object-contain relative z-20" />
      },
      {
        title: 'Dashboard',
        content: <img src={uklon2} alt="Uklon Screenshot 2" className="w-full h-full object-contain relative z-20" />
      },
      {
        title: 'Delivery order',
        content: <img src={uklon3} alt="Uklon Screenshot 3" className="w-full h-full object-contain relative z-20" />
      },
      {
        title: 'Trackinng delivery',
        content: <img src={uklon4} alt="Uklon Screenshot 4" className="w-full h-full object-contain relative z-20" />
      },
      {
        title: 'Balance',
        content: <img src={uklon5} alt="Uklon Screenshot 5" className="w-full h-full object-contain relative z-20" />
      },
    ]} />

  </article>
);
