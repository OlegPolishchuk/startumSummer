import { createBrowserRouter } from 'react-router-dom';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <div>Header</div>,
    children: [
      {
        path: 'vacancies',
        element: <div>Vacancies</div>,
      },
      {
        path: 'favorites',
        element: <div>Favorites</div>,
      },
    ],
  },
]);
