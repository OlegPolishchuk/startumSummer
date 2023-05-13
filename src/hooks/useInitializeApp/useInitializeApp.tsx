import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { API } from 'api/API';
import { useFetchVacancies } from 'hooks/useFechVacancies/useFetchVacancies';
import { localStorageService } from 'services';

export const useInitializeApp = () => {
  const { fetchVacancies, vacancies, isError, error, total, loading } =
    useFetchVacancies();

  const [searchParams] = useSearchParams();
  const pageParam = searchParams.get('page') || 1;

  useEffect(() => {
    const isUserAuth = localStorageService.getAuthData();

    (async () => {
      if (!isUserAuth) {
        try {
          await API.authUser();
        } catch (e) {
          throw new Error('Error! Проблема в API.authUser()');
        }
      }
      await fetchVacancies({ page: +pageParam });
    })();
  }, []);

  return {
    vacancies,
    loading,
    isError,
    error,
    total,
  };
};
