import { SearchParams } from 'constants';

import React from 'react';

import { NoContent } from 'components';
import { CardList, LinearLoadingBar, Pagination } from 'ui';
import { getPageCount } from 'utils';

import { SearchBar } from '../SearchBar/SearchBar';

import cls from './Content.module.css';

import { VacanciesRequestFilterData, Vacancy } from 'api/types';
import { usePageSearchParam } from 'hooks';

interface Props {
  fetchVacancies: (filterParams: VacanciesRequestFilterData) => Promise<void>;
  vacancies: Vacancy[];
  loading: boolean;
  total: number;
  setFilters: React.Dispatch<React.SetStateAction<VacanciesRequestFilterData>>;
}

export const Content = ({
  loading,
  total,
  vacancies,
  fetchVacancies,
  setFilters,
}: Props) => {
  const { page, setPageSearchParams } = usePageSearchParam();

  const pageCount = getPageCount({ total, elementsOnPage: SearchParams.elementsCount });

  const handleClick = async (nextPage: number) => {
    setPageSearchParams(nextPage);

    await fetchVacancies({ page: nextPage });
  };

  return (
    <main className={cls.main}>
      <LinearLoadingBar loading={loading} />
      <SearchBar
        disabled={loading}
        fetchVacancies={fetchVacancies}
        setFilters={setFilters}
      />

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
