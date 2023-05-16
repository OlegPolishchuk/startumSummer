import { SearchParams } from 'constants';

import { useEffect, useRef } from 'react';

import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import { CardList, Pagination } from 'ui';

import { SearchBar } from '../SearchBar/SearchBar';

import cls from './Content.module.css';

import { VacanciesRequestFilterData, Vacancy } from 'api/types';
import { useGetFiltersSearchParams, usePageSearchParam } from 'hooks';
import { NoContent } from 'pages/VacanciesPage/Content/NoContent/NoContent';

interface Props {
  fetchVacancies: (filterParams: VacanciesRequestFilterData) => Promise<void>;
  vacancies: Vacancy[];
  loading: boolean;
  total: number;
}

export const Content = ({ loading, total, vacancies, fetchVacancies }: Props) => {
  const searchFiltersParams = useGetFiltersSearchParams();

  const { page, setPageSearchParams } = usePageSearchParam();

  const progressRef = useRef<LoadingBarRef>(null);

  const pageCount = Math.ceil(total / SearchParams.elementsCount);

  const handleClick = async (nextPage: number) => {
    setPageSearchParams(nextPage);
    progressRef.current?.continuousStart();

    await fetchVacancies({ page: nextPage });
    progressRef?.current?.complete();
  };

  useEffect(() => {
    (async () => {
      await fetchVacancies({ ...searchFiltersParams });
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

      <Pagination
        pageCount={pageCount}
        currentPage={page === 0 ? 0 : page - 1}
        onPageClick={handleClick}
      />
    </main>
  );
};
