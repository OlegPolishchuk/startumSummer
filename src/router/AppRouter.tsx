import { ROUTES } from 'constants';

import { createBrowserRouter } from 'react-router-dom';

import { App } from '../App';

import { CurrentVacancyPage, FavoritesPage, VacanciesPage } from 'pages';

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
        path: `${ROUTES.current}/:id`,
        element: <CurrentVacancyPage />,
      },
      {
        path: ROUTES.favorites,
        element: <FavoritesPage />,
      },
      {
        path: '*',
        element: <VacanciesPage />,
      },
    ],
  },
  {
    path: '*',
    element: <App />,
  },
]);
