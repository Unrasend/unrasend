
import React from 'react';
import plannerLogo from '../../assets/images/Planner5d_Logo.svg';
import { Planner5dMain } from './subpages/main/Planner5dMain';
import { Planner5dDescriptive } from './subpages/descriptive/Planner5dDescriptive';
import { ScopertyMain } from './subpages/main/ScopertyMain';
import { ScopertyDescriptive } from './subpages/descriptive/ScopertyDescriptive';
import { ItTransitMain } from './subpages/main/ItTransitMain';
import { ItTransitDescriptive } from './subpages/descriptive/ItTransitDescriptive';
import { PulsewayMain } from './subpages/main/PulsewayMain';
import { PulsewayDescriptive } from './subpages/descriptive/PulsewayDescriptive';
import { UpworkMain } from './subpages/main/UpworkMain';
import { UpworkDescriptive } from './subpages/descriptive/UpworkDescriptive';
import { UklonMain } from './subpages/main/UklonMain';
import { UklonDescriptive } from './subpages/descriptive/UklonDescriptive';

export interface Project {
  id: string;
  title: React.ReactNode;
  content1: React.ReactNode;
  content2: React.ReactNode;
}

export const projects: Project[] = [
  {
    id: 'planner-5d',
    title: 'Planner5D',
    content1: <Planner5dMain />,
    content2: <Planner5dDescriptive />,
  },
  {
    id: 'scoperty',
    title: 'Scoperty',
    content1: <ScopertyMain />,
    content2: <ScopertyDescriptive />,
  },
  {
    id: 'it-transit',
    title: 'IT-Transit',
    content1: <ItTransitMain />,
    content2: <ItTransitDescriptive />,
  },
  {
    id: 'pulseway',
    title: 'Pulseway',
    content1: <PulsewayMain />,
    content2: <PulsewayDescriptive />,
  },
  {
    id: 'upwork',
    title: 'Upwork',
    content1: <UpworkMain />,
    content2: <UpworkDescriptive />,
  },
  {
    id: 'uklon-cp-2.0',
    title: 'Uklon CP 2.0',
    content1: <UklonMain />,
    content2: <UklonDescriptive />,
  },
];
