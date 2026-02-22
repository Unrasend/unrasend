import React from 'react';
import { ProjectDescriptiveLayout } from '../../components/ProjectDescriptiveLayout';

export const ScopertyDescriptive = () => (
  <ProjectDescriptiveLayout
    technologies={[
      "TypeScript, Angular, RxJS, Google JS API, SCSS, Webpack, Jest, chart.js, Sentry, Python DRF, AWS Cognito"
    ]}
    contributions={[
      "Implemented a facade component over the Google JS API, that was used for: main real estate map, property details page(location), search alert.",
      "In main map application I was responsible for: layers switch on zoom, markers styles for zoom levels, cards for markers, markers render optimization.",
      <>Main real estate page application architecture was: URL parameters for zoom, bounding box and filters triggered top level component data update.<br/>
        That passed this data further to real estate map component and sidebar component containing list.<br/>
        Real estate map component was managing facade component for Google JS API, configuring layers changes, styling, utilizing markers factory, <br/>
        and repository to store and cache markers and pass them to the map.</>,
      <>What is important is that in order to render efficiently a thousand of marker on the same bounding box, and support active map usage(move, zoom), we implemented caching marker <br/>
        instances for reuse, their invalidation, and comparison of markers to conduct: removing markers not present in new bounding box,<br/>
        ingoring still present in the new bounding box markers, and rendering markers not present previously.</>,
      "Participated in development of configurable real estate agent dashboard where: impmented several widgets and PubSub based communication between them."
    ]}
  />
);
