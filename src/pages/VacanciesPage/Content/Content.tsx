import { useEffect, useRef } from 'react';

import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import { CardList, Pagination } from 'ui';

import { SearchBar } from '../SearchBar/SearchBar';

import cls from './Content.module.css';

import { VacanciesRequestFilterData, Vacancy } from 'api/types';
import { useFilterSearchParam, usePageSearchParam } from 'hooks';
import { NoContent } from 'pages/VacanciesPage/Content/NoContent/NoContent';

interface Props {
  fetchVacancies: (filterParams: VacanciesRequestFilterData) => Promise<void>;
  vacancies: Vacancy[];
  loading: boolean;
  total: number;
}

export const Content = ({ loading, total, vacancies, fetchVacancies }: Props) => {
  const { page, setPageSearchParams } = usePageSearchParam();
  const [keyword] = useFilterSearchParam('keyword');

  const progressRef = useRef<LoadingBarRef>(null);

  const handleClick = async (nextPage: number) => {
    setPageSearchParams(nextPage);
    progressRef.current?.continuousStart();

    await fetchVacancies({ page: nextPage });
    progressRef?.current?.complete();
  };

  useEffect(() => {
    (async () => {
      await fetchVacancies({ page, keyword });
    })();
  }, []);

  return (
    <main className={cls.main}>
      <LoadingBar color="#5E96FC" ref={progressRef} />

      <SearchBar disabled={loading} fetchVacancies={fetchVacancies} />

      {vacancies.length === 0 && !loading ? (
        <NoContent />
      ) : (
        <CardList cards={vacancies} isLoading={loading} />
      )}

      <Pagination pageCount={total} currentPage={page - 1} onPageClick={handleClick} />
    </main>
  );
};
