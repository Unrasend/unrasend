import {createHashRouter, Navigate} from "react-router-dom";
import React from "react";
import Home from './features/home/Home.tsx';

export const AppRouter = createHashRouter([
  {
    path: '/projects/:projectId',
    element: <Home />,
  },
  {
    path: '/',
    element: <Navigate to="/projects/planner-5d" replace />,
  },
]);
