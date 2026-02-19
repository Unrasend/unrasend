import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ReactFCEmptyProps } from './types/react-fc-empty-props.type.ts';
import './App.scss';
import { AppRouter } from './App.routes.tsx';

const Host: ReactFCEmptyProps = () => {
  return <RouterProvider router={AppRouter} />;
}

export default Host;
