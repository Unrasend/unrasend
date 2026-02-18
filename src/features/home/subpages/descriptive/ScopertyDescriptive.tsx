
import React from 'react';

export const ScopertyDescriptive = () => (
  <div>
    <h4>Technologies</h4>
    <ul>
      <li>- TypeScript, Angular, RxJS, Google JS API, SCSS, Webpack, Jest, chart.js</li>
    </ul>
    <h4>Key Contributions</h4>
    <ul>
      <li>- Implemented a facade component over the Google JS API, that was used for: main real estate map, property details page(location), search alert.</li>
      <li>- In main map application I was responsible for: layers switch on zoom, markers styles for zoom levels, cards for markers, markers render optimization.</li>
      <li>- Main real estate page application architecture was: URL parameters for zoom, bounding box and filters triggered top level component data update.<br/>
      &nbsp;&nbsp;That passed this data further to real estate map component and sidebar component containing list.<br/>
      &nbsp;&nbsp;Real estate map component was managing facade component for Google JS API, configuring layers changes, styling, utilizing markers factory, <br/>
      &nbsp;&nbsp;and repository to store and cache markers and pass them to the map.
      </li>
      <li>- What is important is that in order to render efficiently a thousand of marker on the same bounding box, and support active map usage(move, zoom), we implemented caching marker <br/>
      &nbsp;&nbsp;instances for reuse, their invalidation, and comparison of markers to conduct: removing markers not present in new bounding box,<br/>
      &nbsp;&nbsp;ingoring still present in the new bounding box markers, and rendering markers not present previously. 
      </li>
      <li>- Participated in development of configurable real estate agent dashboard where: impmented several widgets and PubSub based communication between them.</li>
    </ul>
  </div>
);
