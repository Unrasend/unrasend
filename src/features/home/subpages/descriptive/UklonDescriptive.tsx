import React from 'react';
import { ProjectDescriptiveLayout } from '../../components/ProjectDescriptiveLayout';

export const UklonDescriptive = () => (
  <ProjectDescriptiveLayout
    technologies={[
      "TypeScript, Nx, Angular, NestJS, Fastify, RxJS, Cypress, Jest, Tailwind, SCSS, Sentry."
    ]}
    contributions={[
      "Setting up FE project, libraries, project structure, localization, theme support, sentry, sonarqube.",
      "Setting up BFF (Backend for Frontend), NestJS with Fastify, swagger, logging, sentry, sonarqube, and http-only cookie authentication.",
      "Implemented core features: sign in, dashboard, order tracking, balance management, employees management, settings.",
      "Implemented e2e Cypress tests.",
      "Implemeneted required REST API for the client and described everything in Postman collection."
    ]}
  />
);
