import './App.css';

import { Header } from 'components';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
