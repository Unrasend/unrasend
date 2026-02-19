import { useInjection } from 'inversify-react';
import React, { useRef } from 'react';
import './Header.scss';
import { isMobileDevice } from '../../../shared/responsive.util.ts';
import { ScrollService } from '../../services/scroll.service.ts';
import cvPdf from '../../../assets/vlad_luchkov_en.pdf';
import { projects } from '../../../features/home/ProjectsList';
import { NavLink } from 'react-router-dom';

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
      <a href="#" className="logo link after:hidden before:hidden sm:!hidden">Vladyslav Luchkov</a>
      <a href="#" className="logo after:hidden before:hidden mx-auto md:h-3xl md:leading-[2.5rem]">Senior Frontend Engineer</a>

      <input
        ref={burgerRef}
        id="burger"
        type="checkbox"
        className="hidden"
        onChange={(e) => {
          scrollService.toggleScroll(!e.target.checked);
        }}
      />

      <label
       className="burger"
       htmlFor="burger"
      >
       <span></span>
       <span></span>
       <span></span>
      </label>
      
      <nav className="xs:!flex !hidden overflow-hidden">
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <NavLink
                to={`/projects/${project.id}`}
                className="link !text-active"
                onClick={onLinkClick}
              >
                {project.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <a href={cvPdf} className="link xs:text-active" download="vlad_luchkov_cv.pdf" onClick={onLinkClick}>Download CV</a>


    </header>
  );
}

export default Header;
