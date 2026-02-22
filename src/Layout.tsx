
import { useInjection } from "inversify-react";
import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './core/components/Footer/Footer.tsx';
import Header from './core/components/Header/Header.tsx';
import { ScrollService } from './core/services/scroll.service.ts';

import { ReactFCEmptyProps } from './types/react-fc-empty-props.type.ts';

import './App.scss';

const Layout: ReactFCEmptyProps = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const scrollService = useInjection(ScrollService);

  useEffect(() => scrollService.setScrollElement(terminalRef?.current));

  return <div className="host">
    <div className="noise"></div>
    <div className="overlay"></div>

    <div className="terminal" ref={terminalRef}>
      <Header></Header>

      <main className="main-content">
        <Outlet />
      </main>

      <Footer className="layout-footer"></Footer>
    </div>
  </div>;
}

export default Layout;
