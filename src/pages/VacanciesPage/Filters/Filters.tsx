import { useEffect, useState } from 'react';

import clsx from 'clsx';

import cls from './Filters.module.css';
import { FiltersForm } from './FiltersForm/FiltersForm';
import { FiltersHeader } from './FiltersHeader/FiltersHeader';

import { API } from 'api/API';

interface Catalog {
  value: number;
  label: string;
}

export const Filters = () => {
  const [catalog, setCatalog] = useState<Catalog[]>([]);

  console.log(catalog);

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
      <FiltersHeader />

      <FiltersForm options={catalog} />
    </div>
  );
};
