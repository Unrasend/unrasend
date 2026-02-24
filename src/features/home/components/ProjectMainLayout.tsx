import React from 'react';
import { Carousel, CarouselItem } from '../../../core/components/Carousel/Carousel';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectMainLayoutProps {
  title: React.ReactNode;
  links: ProjectLink[];
  description: React.ReactNode;
  carouselItems: CarouselItem[];
}

export const ProjectMainLayout: React.FC<ProjectMainLayoutProps> = ({ title, links, description, carouselItems }) => (
  <article className="project-content">
    <h3 className="project-title">{title}</h3>

    {links?.length === 1 ? (
      <div className="project-link gap-4">
        <a className="button-material !px-2 !py-2 !text-lg md:!px-6 md:!py-3 md:!text-lg text-center" href={links[0]?.url} target="_blank" rel="noreferrer">
          {links[0]?.label}
        </a>
      </div>
    ) : links?.length > 1 ? (
      <div className="project-link gap-4">
        {links.map((link) => (
          <a key={link.url} className="button-material !px-2 !py-2 !text-lg md:!px-6 md:!py-3 md:!text-lg text-center" href={link.url} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    ) : null}

    <p className="project-desc">{description}</p>

    <Carousel className="project-demo-box" contentClassName="project-demo-content" items={carouselItems} />
  </article>
);
