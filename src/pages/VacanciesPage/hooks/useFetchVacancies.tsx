import { useEffect, useState } from 'react';

import { errorSetter } from 'utils';

import { API } from 'api/API';
import { VacanciesRequestFilterData, Vacancy } from 'api/types';
import { useGetFiltersSearchParams } from 'hooks';

interface Data {
  vacanciesData: {
    vacancies: Vacancy[];
    total: number;
  };
  loading: boolean;
  error: any;
}
export const useFetchVacancies = () => {
  const searchFiltersParams = useGetFiltersSearchParams();

  const [data, setData] = useState<Data>({
    vacanciesData: { total: 0, vacancies: [] },
    loading: true,
    error: null,
  });

  const fetchVacancies = async (filterParams: VacanciesRequestFilterData) => {
    setData(prevState => ({ ...prevState, loading: true }));
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

  useEffect(() => {
    (async () => {
      await fetchVacancies({ ...searchFiltersParams });
    })();
  }, []);

  const { vacanciesData, error, loading } = data;

  return {
    vacancies: vacanciesData.vacancies,
    total: vacanciesData.total,
    error,
    loading,
    fetchVacancies,
  };
};
