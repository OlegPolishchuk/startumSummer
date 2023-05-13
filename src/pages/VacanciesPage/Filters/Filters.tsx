import clsx from 'clsx';

import cls from './Filters.module.css';
import { FiltersForm } from './FiltersForm/FiltersForm';
import { FiltersHeader } from './FiltersHeader/FiltersHeader';

export const Filters = () => {
  return (
    <div className={clsx('wrapper', cls.filters)}>
      <FiltersHeader />

      <FiltersForm />
    </div>
  );
};
