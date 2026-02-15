import { useInjection } from 'inversify-react';
import React, { useRef } from 'react';
import './Header.scss';
import { isMobileDevice } from '../../../shared/responsive.util.ts';
import { ScrollService } from '../../services/scroll.service.ts';
import cvPdf from '../../../assets/vlad_luchkov_en.pdf';

const Header = () => {
  const burgerRef = useRef<HTMLInputElement>(null);
  const scrollService = useInjection(ScrollService);

  const onLinkClick = () => {
    if (!isMobileDevice()) {
      return;
    }

    if (burgerRef.current) {
      burgerRef.current.checked = !burgerRef.current.checked;
      scrollService.enableScroll();
    }
  };

  return (
    <header className="header">
      <a href="#" className="logo link after:hidden before:hidden">Vladyslav Luchkov</a>
      <a href="#" className="logo link after:hidden before:hidden mx-auto">Senior Frontend Engineer</a>

      {/*<input ref={burgerRef} id="burger" type="checkbox" className="hidden" />*/}

      {/*<button*/}
      {/*  className="burger"*/}
      {/*  onClick={() => {*/}
      {/*    burgerRef.current!.checked = !burgerRef.current!.checked;*/}
      {/*    scrollService.toggleScroll(!burgerRef.current!.checked);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*</button>*/}

      <a href={cvPdf} className="link" download="vlad_luchkov_cv.pdf" onClick={onLinkClick}>Download CV</a>
    </header>
  );
}

export default Header;
