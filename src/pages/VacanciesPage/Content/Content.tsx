import { CardList, Pagination } from 'ui';

import { SearchBar } from '../SearchBar/SearchBar';

import cls from './Content.module.css';

export const Content = () => {
  return (
    <main className={cls.main}>
      <SearchBar />

      <CardList cards={[]} />

      <Pagination />
    </main>
  );
};
