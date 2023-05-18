import { useState } from 'react';

import clsx from 'clsx';

import { Content } from './components/Content/Content';
import { Filters } from './components/Filters/Filters';
import { useFetchVacancies } from './hooks';
import cls from './VacanciesPage.module.css';

import { VacanciesRequestFilterData } from 'api/types';

export const VacanciesPage = () => {
  const vacanciesData = useFetchVacancies();
  const { fetchVacancies, vacancies, total, loading } = vacanciesData;

  const [filterParams, setFilterParams] = useState<VacanciesRequestFilterData>({});

  const handleFetchNewVacancies = async (params: VacanciesRequestFilterData) => {
    await fetchVacancies({ ...filterParams, ...params, page: 1 });
  };

  return (
    <div className={clsx('container', cls.container)}>
      <aside className={cls.aside}>
        <Filters callback={handleFetchNewVacancies} setFilters={setFilterParams} />
      </aside>

      <Content
        vacancies={vacancies}
        fetchVacancies={handleFetchNewVacancies}
        loading={loading}
        total={total}
        setFilters={setFilterParams}
      />
    </div>
  );
};
