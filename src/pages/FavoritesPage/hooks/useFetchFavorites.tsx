import { useEffect, useState } from 'react';

import { errorSetter } from 'utils';

import { API } from 'api/API';
import { Vacancy } from 'api/types';
import { localStorageService } from 'services';

interface Result {
  vacancies: Vacancy[];
  error: any;
  loading: boolean;
}
export const useFetchFavorites = () => {
  const [result, setResult] = useState<Result>({
    vacancies: [],
    error: null,
    loading: true,
  });

  const fetchFavoritesVacancies = async () => {
    try {
      const favoritesId = localStorageService.getFavoriteVacancies();

      const promises = favoritesId.map(id => API.getCurrentVacancy(`${id}`));
      const res = await Promise.all(promises);
      const vacancies: Vacancy[] = res.map(response => response.data);

      setResult(prevState => ({ ...prevState, vacancies, loading: false }));
    } catch (e) {
      errorSetter(setResult, e);
    }
  };

  useEffect(() => {
    fetchFavoritesVacancies();
  }, []);

  const { vacancies, loading, error } = result;

  return { vacancies, loading, error, fetchFavoritesVacancies };
};
