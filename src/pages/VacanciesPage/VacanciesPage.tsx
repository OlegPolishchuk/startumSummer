import clsx from 'clsx';

import { Content } from './Content/Content';
import { Filters } from './Filters/Filters';
import cls from './VacanciesPage.module.css';

import { useFetchVacancies } from 'hooks';

export const VacanciesPage = () => {
  const vacanciesData = useFetchVacancies();
  const { fetchVacancies } = vacanciesData;

  return (
    <div className={clsx('container', cls.container)}>
      <aside className={cls.aside}>
        <Filters callback={fetchVacancies} />
      </aside>
      <Content {...vacanciesData} />
    </div>
  );
};
