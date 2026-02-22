import React from 'react';
import { ProjectDescriptiveLayout } from '../../components/ProjectDescriptiveLayout';

export const UpworkDescriptive = () => (
  <ProjectDescriptiveLayout
    technologies={[
      "Nuxt, Vue, TypeScript, JavaScript, Vuex, Java, Kibana, LESS"
    ]}
    contributions={[
      "Implemented A/B features, by adding additional or different steps to onboarding flow.",
      "Used Kibana to monitor logs while deployments and for debugging, or to create dashboards to monitor feature performance.",
      "Fixed bugs related to accessibility, performance, and functionality."
    ]}
  />
);
