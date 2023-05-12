import './App.css';
import { ROUTES } from 'constants';

import { Routes, Route } from 'react-router-dom';

import { MainPage } from 'pages';

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.main} element={<MainPage />} />
    </Routes>
  );
};
