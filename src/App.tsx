import './App.css';

import { useMemo } from 'react';

import { Error, GlobalLoader, Header } from 'components';
import { Outlet } from 'react-router-dom';

import { VacanciesContext } from 'context';
import { useInitializeApp } from 'hooks';

export const App = () => {
  const { loading, vacancies, total, isError, error } = useInitializeApp();
  const contextData = useMemo(() => ({ vacancies, total }), [vacancies, total]);

  return (
    <VacanciesContext.Provider value={contextData}>
      {loading && <GlobalLoader />}

      <Header />

      {isError ? <Error error={error && error} /> : <Outlet />}
    </VacanciesContext.Provider>
  );
};
