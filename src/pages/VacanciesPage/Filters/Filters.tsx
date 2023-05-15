import { useEffect, useState } from 'react';

import clsx from 'clsx';

import cls from './Filters.module.css';
import { FiltersForm } from './FiltersForm/FiltersForm';

import { API } from 'api/API';
import { VacanciesRequestFilterData } from 'api/types';
import { Catalog } from 'pages/VacanciesPage/types';

interface Props {
  callback: (formData: VacanciesRequestFilterData) => void;
}

export const Filters = ({ callback }: Props) => {
  const [catalog, setCatalog] = useState<Catalog[]>([]);

  const handleFormCallback = (formData: VacanciesRequestFilterData) => {
    callback(formData);
  };

  useEffect(() => {
    (async () => {
      const res = await API.getProfessionCatalogues();

      const data = res.data.map(item => ({
        value: item.key,
        label: item.title_trimmed,
      }));

      setCatalog(data);
    })();
  }, []);

  return (
    <div className={clsx('wrapper', cls.filters)}>
      <FiltersForm options={catalog} clickCallback={handleFormCallback} />
    </div>
  );
};
