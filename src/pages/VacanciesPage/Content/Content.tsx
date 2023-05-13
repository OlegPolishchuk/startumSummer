import { CardList, Pagination } from 'ui';

import { SearchBar } from '../SearchBar/SearchBar';

import cls from './Content.module.css';

import { useVacancies } from 'context';

export const Content = () => {
  const vacancies = useVacancies();

  return (
    <main className={cls.main}>
      <SearchBar />

      <CardList cards={vacancies} />

      <Pagination />
    </main>
  );
};
