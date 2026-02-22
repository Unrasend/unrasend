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
      <a className="project-link" href={links[0]?.url} target="_blank" rel="noreferrer">
        {links[0]?.label}
      </a>
    ) : links?.length > 1 ? (
      <div className="flex w-[50%] items-center justify-end gap-2">
        {links.map((link, index) => (
          <React.Fragment key={link.url}>
            <a className="text-lg" href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
            {index < links.length - 1 && <span>|</span>}
          </React.Fragment>
        ))}
      </div>
    ) : null}

    <p className="project-desc">{description}</p>

    <Carousel className="project-demo-box" contentClassName="project-demo-content" items={carouselItems} />
  </article>
);
