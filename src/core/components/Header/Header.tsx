import { useInjection } from 'inversify-react';
import React, { useRef } from 'react';
import './Header.scss';
import { isMobileDevice } from '../../../shared/responsive.util.ts';
import { ScrollService } from '../../services/scroll.service.ts';

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
    <header>
      <a href="#" className="logo link after:hidden before:hidden">Name</a>

      <input ref={burgerRef} id="burger" type="checkbox" className="hidden" />

      <button
        className="burger"
        onClick={() => {
          burgerRef.current!.checked = !burgerRef.current!.checked;
          scrollService.toggleScroll(!burgerRef.current!.checked);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav>
        <ul>
          <li>
            <a href="#" className="link" onClick={onLinkClick}>Test</a>
          </li>
          <li>
            <a href="#" className="link" onClick={onLinkClick}>Home</a>
          </li>
          <li>
            <a href="#" className="link" onClick={onLinkClick}>Home</a>
          </li>
          <li>
            <a href="#" className="link" onClick={onLinkClick}>Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
