import React from 'react';
import { ProjectDescriptiveLayout } from '../../components/ProjectDescriptiveLayout';

export const ItTransitDescriptive = () => (
  <ProjectDescriptiveLayout
    technologies={[
      "AngularJS, OpenLayers, jQuery, WFS/WMS, GeoServer, Java Spring, HTML5, CSS3, JavaScript, Gulp, RequireJS, Mercurial, SAP UI 5, Bash"
    ]}
    contributions={[
      <>The parts which I was engineering were: coordinates conversion utilities, export to jpg, export to pdf, url hash parameters sync for map state,<br/>
      drawing polygons, notes markers and note taking, measuring distances and areas, legend, gas pipelines length measurement tool.</>
    ]}
  />
);
