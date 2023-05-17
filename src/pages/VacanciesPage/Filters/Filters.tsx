import { useContext, useEffect, useState } from 'react';

import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

import cls from './Filters.module.css';
import { FiltersForm } from './FiltersForm/FiltersForm';

import { VacanciesRequestFilterData } from 'api/types';
import { Professions } from 'context/ProfessionContext';
import { useWrapSearchParams } from 'hooks';
import { Catalog } from 'pages/VacanciesPage/types';

interface Props {
  callback: (formData: VacanciesRequestFilterData) => void;
}

export const Filters = ({ callback }: Props) => {
  const { professionList } = useContext(Professions);

  const [catalog, setCatalog] = useState<Catalog[]>([]);
  const wrapSearchParams = useWrapSearchParams();

  const currentQueryString = useLocation().search;

  const handleFormCallback = (formData: VacanciesRequestFilterData) => {
    const { filters, queryString } = wrapSearchParams(formData);

    if (currentQueryString !== queryString) {
      callback(filters);
    }
  };

  useEffect(() => {
    const data = professionList.map(profession => ({
      value: profession.key,
      label: profession.title_trimmed,
    }));

    setCatalog(data);
  }, [professionList]);

  return (
    <div className={clsx('wrapper', cls.filters)}>
      <FiltersForm options={catalog} clickCallback={handleFormCallback} />
    </div>
  );
};
