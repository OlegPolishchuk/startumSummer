import { useEffect, useState } from 'react';

import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

import cls from './Filters.module.css';
import { FiltersForm } from './FiltersForm/FiltersForm';

import { API } from 'api/API';
import { VacanciesRequestFilterData } from 'api/types';
import { useWrapSearchParams } from 'hooks';
import { Catalog } from 'pages/VacanciesPage/types';

interface Props {
  callback: (formData: VacanciesRequestFilterData) => void;
}

export const Filters = ({ callback }: Props) => {
  const [catalog, setCatalog] = useState<Catalog[]>([]);
  const wrapSearchParams = useWrapSearchParams();

  const currentQueryString = useLocation().search;

  const handleFormCallback = (formData: VacanciesRequestFilterData) => {
    const { filters, queryString } = wrapSearchParams(formData);

    console.log('queryString =', queryString);
    console.log(`currentQueryString =`, currentQueryString);
    if (currentQueryString !== queryString) {
      callback(filters);
    }
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
