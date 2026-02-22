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
      <AnimatedGears />
      <span className="logo link ml-xs">Vladyslav Luchkov</span>
      <span className="logo link ml-auto !hidden lg:block">Senior Frontend Engineer</span>

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

      <nav className="nav-menu hidden md:flex">
        <ul className="nav-list">
          {projects.map((project) => (
            <li key={project.id} className="nav-item">
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

        <a href={cvPdf} className="link cv-link" download="vlad_luchkov_cv.pdf" onClick={onLinkClick}>Download CV</a>

        <button
          className="theme-toggle-btn"
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

      <a href={cvPdf} className="link cv-link ml-auto md:!hidden" download="vlad_luchkov_cv.pdf" onClick={onLinkClick}>Download CV</a>

      <button
        className="theme-toggle-btn md:hidden"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? (
          <img src={nightSvg} className="w-5 h-5 opacity-80" alt="Dark theme" />
        ) : (
          <img src={daySvg} className="w-5 h-5 opacity-80" alt="Light theme" />
        )}
      </button>

    </header>
  );
}

export default Header;
