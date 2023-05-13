import { useEffect, useRef } from 'react';

import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import { CardList, Pagination } from 'ui';

import { SearchBar } from '../SearchBar/SearchBar';

import cls from './Content.module.css';

import { useVacancies } from 'context';
import { useFetchVacancies, usePageSearchParam } from 'hooks';

export const Content = () => {
  const { page, setPageSearchParams } = usePageSearchParam();
  const { vacancies, total, setVacancies } = useVacancies();
  const { fetchVacancies, vacancies: newVacancies } = useFetchVacancies();

  const progressRef = useRef<LoadingBarRef>(null);

  const handleClick = async (nextPage: number) => {
    setPageSearchParams(nextPage);
    progressRef.current?.continuousStart();

    await fetchVacancies({ page: nextPage });
    progressRef?.current?.complete();
  };

  useEffect(() => {
    if (newVacancies) {
      setVacancies(newVacancies);
    }
  }, [newVacancies]);

  return (
    <main className={cls.main}>
      <LoadingBar color="#5E96FC" ref={progressRef} />

      <SearchBar />

      <CardList cards={vacancies} />

      <Pagination pageCount={total} currentPage={page - 1} onPageClick={handleClick} />
    </main>
  );
};
