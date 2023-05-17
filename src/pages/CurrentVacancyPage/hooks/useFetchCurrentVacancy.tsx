import { useState } from 'react';

import { errorSetter } from 'utils';

import { API } from 'api/API';
import { Vacancy } from 'api/types';

export const useFetchCurrentVacancy = () => {
  const [data, setData] = useState({
    error: null,
    loading: true,
    vacancyData: {} as Vacancy,
  });

  const fetchVacancy = async (id: string) => {
    try {
      const res = await API.getCurrentVacancy(id);

      setData(prevState => ({
        ...prevState,
        vacancyData: res.data,
        loading: false,
      }));
    } catch (e) {
      errorSetter(setData, e);
    }
  };

  return {
    ...data,
    fetchVacancy,
  };
};
