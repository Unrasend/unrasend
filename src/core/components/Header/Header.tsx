import { useInjection } from 'inversify-react';
import React, { useRef } from 'react';
import './Header.scss';
import { isMobileDevice } from '../../../shared/responsive.util.ts';
import { ScrollService } from '../../services/scroll.service.ts';
import daySvg from '../../../assets/icons/day.svg';
import nightSvg from '../../../assets/icons/night.svg';
import cvPdf from '../../../assets/vlad_luchkov_en.pdf';
import { projects } from '../../../features/home/ProjectsList';
import { NavLink } from 'react-router-dom';
import AnimatedGears from '../AnimatedGears/AnimatedGears';

const Header = () => {
  const burgerRef = useRef<HTMLInputElement>(null);
  const scrollService = useInjection(ScrollService);

  const [theme, setTheme] = React.useState<'light' | 'dark'>(
    (document.documentElement.dataset.theme as 'light' | 'dark') || 'light'
  );

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.dataset.theme = newTheme;
  };

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
      <div className="absolute top-[0.5rem] left-[1rem]">
        <AnimatedGears />
      </div>
      <span className="text-xl text-interactive md:text-md flex items-center h-full sm:pt-sm pl-md md:pl-xs whitespace-nowrap hide-on-mobile-menu">
        Vladyslav Luchkov
      </span>
      <span className="text-xl text-interactive md:text-lg flex items-center justify-center flex-1 whitespace-nowrap sm:hidden hide-on-mobile-menu">
        Senior Frontend Engineer
      </span>

      <input
        ref={burgerRef}
        id="burger"
        type="checkbox"
        className="burger-input hidden"
        onChange={(e) => {
          scrollService.toggleScroll(!e.target.checked);
        }}
      />

      <label className="burger hidden md:block" htmlFor="burger">
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </label>

      <nav className="nav-menu hidden">
        <div className="flex flex-col items-center justify-center mb-6 mt-[-1rem] w-full text-center">
          <span className="text-xl text-interactive font-bold whitespace-nowrap mb-1">
            Vladyslav Luchkov
          </span>
          <span className="text-sm text-interactive whitespace-nowrap">
            Senior Frontend Engineer
          </span>
        </div>

        <ul className="nav-list w-full grid grid-cols-2 gap-8 md:gap-6 sm:gap-4 xs:gap-3 flex-1 content-center max-w-[800px] md:max-w-[650px] sm:max-w-[500px] xs:max-w-[320px] px-2 mx-auto">
          {projects.map((project) => (
            <li key={project.id} className="nav-item m-0 flex justify-center w-full h-full items-stretch">
              <NavLink
                to={`/projects/${project.id}`}
                className={({ isActive }) => `button offset !text-2xl md:!text-xl sm:!text-lg xs:!text-sm w-full h-full p-8 md:p-6 sm:p-4 xs:p-3 flex items-center justify-center text-center leading-tight ${isActive ? 'active !text-surface' : '!text-interactive'}`}
                onClick={onLinkClick}
              >
                {project.title}
              </NavLink>
            </li>
          ))}
          <li className="nav-item col-span-2 w-full flex justify-center mt-6 md:mt-4 sm:mt-3 xs:mt-2 m-0 h-full items-stretch">
            <a href={cvPdf} className="button offset !text-2xl md:!text-xl sm:!text-lg xs:!text-sm !text-interactive w-full p-8 md:p-6 sm:p-4 xs:p-3 flex items-center justify-center text-center" download="vlad_luchkov_cv.pdf" onClick={onLinkClick}>Download CV</a>
          </li>
        </ul>

        <button
          className="theme-toggle-button button-material w-12 h-12 !p-0 mt-auto mb-lg"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? (
            <img src={daySvg} className="w-5 h-5 opacity-80" alt="Dark theme" />
          ) : (
            <img src={nightSvg} className="w-5 h-5 opacity-80" alt="Light theme" />
          )}
        </button>
      </nav>

      <a href={cvPdf} className="button-material !px-md ml-auto md:!hidden text-xl md:text-lg hide-on-mobile-menu" download="vlad_luchkov_cv.pdf" onClick={onLinkClick}>Download CV</a>

      <button
        className="theme-toggle-button button-material w-3xl h-3xl !p-0 md:hidden hide-on-mobile-menu"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? (
          <img src={nightSvg} className="w-2xl h-2xl opacity-80" alt="Dark theme" />
        ) : (
          <img src={daySvg} className="w-2xl h-2xl opacity-80" alt="Light theme" />
        )}
      </button>

    </header>
  );
}

export default Header;
