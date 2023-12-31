import { useInjection } from "inversify-react";
import React, { useEffect, useRef } from 'react';
import { RouterProvider } from 'react-router-dom';

import Footer from './core/components/Footer/Footer.tsx';
import Header from './core/components/Header/Header.tsx';
import { ScrollService } from './core/services/scroll.service.ts';

import { ReactFCEmptyProps } from './types/react-fc-empty-props.type.ts';

import './App.scss';
import { AppRouter } from './App.routes.tsx';

const Host: ReactFCEmptyProps = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const scrollService = useInjection(ScrollService);

  useEffect(() => scrollService.setScrollElement(terminalRef?.current));

  return <div className="host">
    <div className="noise"></div>
    <div className="overlay"></div>

    <div className="terminal" ref={terminalRef}>
      <Header></Header>

      <main className="p-5xl xs:p-md">
        <RouterProvider router={AppRouter} />
        <h1>Caption 1</h1>
        <h2>Caption 2</h2>
        <h3>Caption 3</h3>
        <h4>Caption 4</h4>
        <h5>Caption 5</h5>
        <h6>Caption 6</h6>
        <hr/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices feugiat orci, finibus porttitor ipsum
          cursus sit amet. Nulla imperdiet, arcu quis venenatis molestie, arcu elit dapibus tortor, vitae viverra nisl
          ex at est. Morbi convallis tellus sed dui sollicitudin, eu euismod sem pulvinar. Morbi pellentesque elementum
          dui, condimentum luctus neque maximus nec. Duis non sem non metus cursus tristique. Maecenas eget sodales
          purus, sit amet dapibus massa. Morbi fringilla, ex a faucibus cursus, felis ante condimentum tellus, tempor
          lacinia lacus neque id ligula. Nullam sit amet lectus ex. Curabitur sed ex neque. Suspendisse fringilla ac
          enim non lobortis.</p>
      </main>

      <Footer className="block mt-auto"></Footer>
    </div>
  </div>;
}

export default Host;
