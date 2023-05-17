import { SearchParams } from 'constants';

import { useEffect } from 'react';

import { CardList, LinearLoadingBar, Pagination } from 'ui';
import { getPageCount } from 'utils';

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

  const pageCount = getPageCount({ total, elementsOnPage: SearchParams.elementsCount });

  const handleClick = async (nextPage: number) => {
    setPageSearchParams(nextPage);

    await fetchVacancies({ page: nextPage });
  };

  useEffect(() => {
    (async () => {
      await fetchVacancies({ ...searchFiltersParams });
    })();
  }, []);

  return (
    <main className={cls.main}>
      <LinearLoadingBar loading={loading} />
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
