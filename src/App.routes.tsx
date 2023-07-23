import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Home from './features/home/Home.tsx';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);
