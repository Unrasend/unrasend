import React from 'react';
import { ProjectDescriptiveLayout } from '../../components/ProjectDescriptiveLayout';

export const PulsewayDescriptive = () => (
  <ProjectDescriptiveLayout
    technologies={[
      "TypeScript, Angular, RxJS, NgXS, SCSS, Webpack, later migrated to Vite, Jasmine, .Net 4.5"
    ]}
    contributions={[
      "Implemented reusable data-table component with filtering, sorting, pagination, and column selection, that was used in several places across the product.",
      "Used aforementioned component to build advanced systems search, and patch management.",
      "Designed Wizard builder for creating custom modal flows for configuration of various product features.",
      "Wizard builder was implemented as a configurable tree of steps, and navigation commands, history repository was utilized to store previous states.",
      "Used aforementioned wizard to implement bulk actions for running workflows on systems.",
      "Implemented new auth page for admin portal of the product.",
      "Led migration from Angular 12 to 18 with successful launch.",
      "Created epic and described stages and tasks required for updating components styles in order to support design system and themes."
    ]}
  />
);
