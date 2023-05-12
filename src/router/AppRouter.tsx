import { ROUTES } from 'constants';

import { createBrowserRouter } from 'react-router-dom';

import { App } from '../App';

import { VacanciesPage } from 'pages';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: ROUTES.main,
        element: <VacanciesPage />,
      },
      {
        path: ROUTES.favorites,
        element: <div>Favorites</div>,
      },
    ],
  },
]);
