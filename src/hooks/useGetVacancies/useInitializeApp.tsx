import { useEffect, useState } from 'react';

import { API } from 'api/API';
import { VacanciesRequestFilterData, Vacancy } from 'api/types';

interface Data {
  vacancies: Vacancy[];
  total: number;
  loading: boolean;
  isError: boolean;
  error: any;
}

export const useInitializeApp = () => {
  const [data, setData] = useState<Data>({
    vacancies: [],
    total: 0,
    loading: true,
    isError: false,
    error: null,
  });

  useEffect(() => {
    API.authUser().then(() => {
      API.getVacancies({} as VacanciesRequestFilterData)
        .then(res => {
          setData(prevState => ({
            ...prevState,
            loading: false,
            vacancies: res.data.objects,
            total: res.data.total,
          }));
        })
        .catch(error => {
          setData(prevState => ({
            ...prevState,
            loading: false,
            isError: true,
            error: error?.message || error,
          }));
        });
    });
  }, []);

  return {
    vacancies: data.vacancies,
    loading: data.loading,
    isError: data.isError,
    error: data.error,
  };
};
