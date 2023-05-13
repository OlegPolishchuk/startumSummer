import { useState } from 'react';

import { errorSetter } from 'utils';

import { API } from 'api/API';
import { VacanciesRequestFilterData, Vacancy } from 'api/types';

interface Data {
  vacanciesData: {
    vacancies: Vacancy[];
    total: number;
  };
  loading: boolean;
  isError: boolean;
  error: any;
}
export const useFetchVacancies = () => {
  const [data, setData] = useState<Data>({
    vacanciesData: { total: 0, vacancies: [] },
    loading: true,
    isError: false,
    error: null,
  });

  const fetchVacancies = async (filterParams: VacanciesRequestFilterData) => {
    try {
      const { data } = await API.getVacancies(filterParams);
      const { total, objects } = data;

      setData(prevState => ({
        ...prevState,
        loading: false,
        vacanciesData: { total, vacancies: objects },
      }));
    } catch (e) {
      errorSetter(setData, e);
    }
  };

  const { vacanciesData, isError, error, loading } = data;

  return {
    vacancies: vacanciesData.vacancies,
    total: vacanciesData.total,
    error,
    isError,
    loading,
    fetchVacancies,
  };
};
