import { useMemo, useState } from 'react';

import { Error, GlobalLoader, Header } from 'components';
import { Outlet } from 'react-router-dom';

import { Vacancy } from 'api/types';
import { AppContext } from 'context';
import { useInitializeApp } from 'hooks';

export const App = () => {
  const { loading, error, isInitialized, favoriteVacancies } = useInitializeApp();
  const [favorites, setFavorites] = useState<Vacancy[]>(favoriteVacancies);

  const contextData = useMemo(
    () => ({
      isInitialized,
      favoriteVacancies: favorites,
      setFavoritesVacancies: setFavorites,
    }),
    [isInitialized, favorites],
  );

  return (
    <AppContext.Provider value={contextData}>
      {loading && <GlobalLoader />}

      <Header />

      {error ? <Error error={error && error} /> : <Outlet />}
    </AppContext.Provider>
  );
};
