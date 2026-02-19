import {createHashRouter, Navigate} from "react-router-dom";
import React from "react";
import Home from './features/home/Home.tsx';
import Layout from './Layout.tsx';

export const AppRouter = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/projects/:projectId',
        element: <Home />,
      },
      {
        path: '/',
        element: <Navigate to="/projects/planner-5d" replace />,
      }
    ]
  }
]);
