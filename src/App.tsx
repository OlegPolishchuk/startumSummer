import { useMemo, useState } from 'react';

import { Error, GlobalLoader, Header } from 'components';
import { Outlet } from 'react-router-dom';

import { Vacancy } from 'api/types';
import { FavoriteContextData, FavoritesContext } from 'context/FavoritesContext';
import { useInitializeApp } from 'hooks';

export const App = () => {
  const { loading, error } = useInitializeApp();
  const [favorites, setFavorites] = useState<Vacancy[]>([]);

  const contextValue: FavoriteContextData = useMemo(
    () => ({
      favoriteVacancies: favorites,
      setFavoriteVacancies: setFavorites,
    }),
    [favorites],
  );

  return (
    <>
      <Header />

      {loading && <GlobalLoader />}
      {error ? (
        <Error error={error && error} />
      ) : (
        <FavoritesContext.Provider value={contextValue}>
          <Outlet />
        </FavoritesContext.Provider>
        // <Outlet />
      )}
    </>
  );
};
