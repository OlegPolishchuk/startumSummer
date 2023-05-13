import { useEffect, useState } from 'react';

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

export const useInitializeApp = () => {
  const [data, setData] = useState<Data>({
    vacanciesData: { total: 0, vacancies: [] },
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
            vacanciesData: { vacancies: res.data.objects, total: res.data.total },
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
    vacanciesData: data.vacanciesData,
    loading: data.loading,
    isError: data.isError,
    error: data.error,
  };
};
