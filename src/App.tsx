import './App.css';

import { Error, GlobalLoader, Header } from 'components';
import { Outlet } from 'react-router-dom';

import { VacanciesContext } from 'context';
import { useInitializeApp } from 'hooks';

export const App = () => {
  const { loading, vacancies, isError, error } = useInitializeApp();

  return (
    <VacanciesContext.Provider value={vacancies}>
      {loading && <GlobalLoader />}

      <Header />

      {isError ? <Error error={error && error} /> : <Outlet />}
    </VacanciesContext.Provider>
  );
};
