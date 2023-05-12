import clsx from 'clsx';

import { Content } from './Content/Content';
import { Filters } from './Filters/Filters';
import cls from './VacanciesPage.module.css';

export const VacanciesPage = () => {
  return (
    <div className={clsx('container', cls.container)}>
      <aside className={cls.aside}>
        <Filters />
      </aside>
      <Content />
    </div>
  );
};
