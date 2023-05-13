import { CardList, Pagination } from 'ui';

import { SearchBar } from '../SearchBar/SearchBar';

import cls from './Content.module.css';

import { useVacancies } from 'context';
import { useFetchVacancies, usePageSearchParam } from 'hooks';

export const Content = () => {
  const { page, setPageSearchParams } = usePageSearchParam();
  const { vacancies, total } = useVacancies();

  const { fetchVacancies, vacancies: newVacancies } = useFetchVacancies();

  console.log(`vacancies in Content => `, vacancies);

  const handleClick = (nextPage: number) => {
    setPageSearchParams(nextPage);

    fetchVacancies({ page: nextPage });
  };

  console.log('newVacancies = ', newVacancies);

  return (
    <main className={cls.main}>
      <SearchBar />

      <CardList cards={vacancies} />

      <Pagination pageCount={total} currentPage={page - 1} onPageClick={handleClick} />
    </main>
  );
};
