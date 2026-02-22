import React from 'react';
import { ProjectDescriptiveLayout } from '../../components/ProjectDescriptiveLayout';

export const Planner5dDescriptive = () => (
  <ProjectDescriptiveLayout
    technologies={[
      "TypeScript, React, tsyringe DI, Mobx lite, JQuery, ThreeJS, custom 2D rendering engine, RxJS, SCSS, Webpack, Jest, Sentry, PHP Symphony, Twig, Docker"
    ]}
    contributions={[
      "Implemented commenting feature for items in projects in both 2D and 3D views.",
      "Commenting uses state manager with polling, comments view model utilized state manager to sync data changes across sidebar and editor.",
      "For placement of a comment in 2D and 2D were created separate renderers, 2D used SVG, 3D used ThreeJS.",
      "For placement of React component card near the marker in 2D a popover component was implemented.",
      "For calculating coordinates in 3D raytracing was utilized.",
      "Most of the integrations for linking to objects, snapping, 2D rendering, interactions, are done using legacy 10+ years old editor engine.",
      "Migrated Contest Votes, Profile from JQuery to React.",
      "Implemented floors thickness and project items migrator for it.",
      <>Migration was necessary since projects without floor thickness had lots of items in houses, which could be inside of a floor due to appearing of thickness.<br/>
      This way we could avoid such situation and keep items in their places. But at the same time items under the ceiling were not moved, as well as windows.</>,
      "Implemented floating UI portal utility usable in both legacy JS code and modern React.",
      "Fixed glitches in rooms rendering such as mixed mesh points order or z-fighting."
    ]}
  />
);
