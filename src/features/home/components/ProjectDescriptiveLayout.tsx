import React, { ReactNode } from 'react';

export interface ProjectDescriptiveLayoutProps {
  technologies: ReactNode[];
  contributions: ReactNode[];
}

export const ProjectDescriptiveLayout: React.FC<ProjectDescriptiveLayoutProps> = ({ technologies, contributions }) => (
  <div>
    <h4 className="mb-sm">Technologies</h4>
    <ul className="flex flex-col gap-2xs mb-md">
      {technologies.map((tech, i) => (
        <li key={i} className="flex items-start">
          <span className="mr-xs leading-lg mt-3xs">&bull;</span>
          <span className="flex-1 leading-lg">{tech}</span>
        </li>
      ))}
    </ul>
    <h4 className="mb-sm">Key Contributions</h4>
    <ul className="flex flex-col gap-2xs">
      {contributions.map((contribution, i) => (
        <li key={i} className="flex items-start">
          <span className="mr-xs leading-lg mt-3xs">&bull;</span>
          <span className="flex-1 leading-lg">{contribution}</span>
        </li>
      ))}
    </ul>
  </div>
);
