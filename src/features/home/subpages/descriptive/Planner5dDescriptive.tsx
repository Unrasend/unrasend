
import React from 'react';

export const Planner5dDescriptive = () => (
  <div>
    <h4>Technologies</h4>
    <ul>
      <li>- TypeScript, React, tsyringe DI, Mobx lite, JQuery, ThreeJS, custom 2D rendering engine, RxJS, SCSS, Webpack, Jest, Sentry, PHP Symphony, Twig, Docker</li>
    </ul>
    <h4>Key Contributions</h4>
    <ul>
      <li>- Implemented commenting feature for items in projects in both 2D and 3D views.</li>
      <li>- Commenting uses state manager with polling, comments view model utilized state manager to sync data changes across sidebar and editor.</li>
      <li>- For placement of a comment in 2D and 2D were created separate renderers, 2D used SVG, 3D used ThreeJS.</li>
      <li>- For placement of React component card near the marker in 2D a popover component was implemented.</li>
      <li>- For calculating coordinates in 3D raytracing was utilized.</li>
      <li>- Most of the integrations for linking to objects, snapping, 2D rendering, interactions, are done using legacy 10+ years old editor engine.</li>
      <li>- Migrated Contest Votes, Profile from JQuery to React.</li>
      <li>- Implemented floors thickness and project items migrator for it.</li>
      <li>- Migration was necessary since projects without floor thickness had lots of items in houses, which could be inside of a floor due to appearing of thickness.<br/>
      &nbsp;&nbsp;This way we could avoid such situation and keep items in their places. But at the same time items under the ceiling were not moved, as well as windows.</li>
      <li>- Implemented floating UI portal utility usable in both legacy JS code and modern React.</li>
      <li>- Fixed glitches in rooms rendering such as mixed mesh points order or z-fighting.</li>
    </ul>
  </div>
);
