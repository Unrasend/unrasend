import React, { useRef } from 'react';
import './Header.scss';
import { isMobileDevice } from '../../../shared/responsive.util.ts';

const Header = () => {
  const burgerRef = useRef<HTMLInputElement>(null);

  const onLinkClick = () => {
    if (!isMobileDevice()) {
      return;
    }

    if (burgerRef.current) {
      burgerRef.current.checked = !burgerRef.current.checked;
    }
  }

  return (
    <header
      className="
        relative
        flex
        items-center
        w-full
        h-4xl
        px-md
        bg-bg-2
        justify-between
        xs:flex-col
        border-bg-body
        border-b-2
        transition-all
        hover:border-alert
        hover:bg-alert
        focus-within:bg-alert
        focus-within:border-alert
        xs:hover:border-bg-body
        xs:hover:bg-bg-2
        xs:focus-within:bg-bg-2
        xs:focus-within:border-bg-body
      "
    >
      <a href="#" className="logo link after:hidden before:hidden">Name</a>

      <input ref={burgerRef} id="burger" type="checkbox" className="hidden" />

      <button
        className="burger"
        onClick={() => {
          if (burgerRef.current) {
            burgerRef.current.checked = !burgerRef.current.checked;
          }
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className="
        flex-1
        flex
        items-center
        justify-center
        h-full
        xs:hidden
        transition-all
      ">
        <ul className="
          flex
          items-center
          -translate-x-1/4
          h-full
          xs:h-auto
          xs:flex-col
          xs:translate-x-0
        ">
          <li className="h-full xs:mb-xl">
            <a href="#" className="link" onClick={onLinkClick}>Test</a>
          </li>
          <li className="h-full xs:mb-xl">
            <a href="#" className="link" onClick={onLinkClick}>Home</a>
          </li>
          <li className="h-full xs:mb-xl">
            <a href="#" className="link" onClick={onLinkClick}>Home</a>
          </li>
          <li className="h-full xs:mb-xl">
            <a href="#" className="link" onClick={onLinkClick}>Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
