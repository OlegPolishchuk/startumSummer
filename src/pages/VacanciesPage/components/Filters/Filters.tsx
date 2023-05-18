import { ROUTES } from 'constants';

import React, { useContext, useEffect, useState } from 'react';

import clsx from 'clsx';
import { useLocation, useNavigate } from 'react-router-dom';

import { Catalog } from '../../types';

import cls from './Filters.module.css';
import { FiltersForm } from './FiltersForm/FiltersForm';

import { VacanciesRequestFilterData } from 'api/types';
import { Professions } from 'context/ProfessionContext';
import { useWrapSearchParams } from 'hooks';

interface Props {
  callback: (formData: VacanciesRequestFilterData) => void;
  setFilters: React.Dispatch<React.SetStateAction<VacanciesRequestFilterData>>;
}

export const Filters = ({ callback, setFilters }: Props) => {
  const { professionList } = useContext(Professions);
  const navigate = useNavigate();

  const [catalog, setCatalog] = useState<Catalog[]>([]);
  const wrapSearchParams = useWrapSearchParams();

  const currentQueryString = useLocation().search;

  const handleFormCallback = (formData: VacanciesRequestFilterData) => {
    const { filters, queryString } = wrapSearchParams(formData);

    if (currentQueryString !== queryString) {
      navigate(ROUTES.main + queryString);
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
      <FiltersForm
        options={catalog}
        clickCallback={handleFormCallback}
        setFilters={setFilters}
      />
    </div>
  );
};
