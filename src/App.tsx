import './App.css';

import { useMemo, useState } from 'react';

import { Error, GlobalLoader, Header } from 'components';
import { Outlet } from 'react-router-dom';

import { AppContext } from 'context';
import { useInitializeApp } from 'hooks';

export const App = () => {
  const { loading, error, isInitialized } = useInitializeApp();
  const [favorites, setFavorites] = useState([]);

  const contextData = useMemo(
    () => ({
      isInitialized,
      favoriteVacancies: favorites,
      setFavoritesVacancies: () => setFavorites(favorites),
    }),
    [isInitialized],
  );

  return (
    <AppContext.Provider value={contextData}>
      {loading && <GlobalLoader />}

      <Header />

      {error ? <Error error={error && error} /> : <Outlet />}
    </AppContext.Provider>
  );
};
