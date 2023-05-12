import { ROUTES } from 'constants';

import { createBrowserRouter } from 'react-router-dom';

import { Header } from 'components';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: ROUTES.main,
        element: <div>Vacancies</div>,
      },
      {
        path: ROUTES.favorites,
        element: <div>Favorites</div>,
      },
    ],
  },
]);
