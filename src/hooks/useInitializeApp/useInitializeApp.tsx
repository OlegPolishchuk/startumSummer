import { useEffect, useState } from 'react';

import { API } from 'api/API';
import { localStorageService } from 'services';

interface Data {
  loading: boolean;
  isInitialized: boolean;
  error: any;
  // favoriteVacancies: Vacancy[];
}
export const useInitializeApp = () => {
  const [data, setData] = useState<Data>({
    loading: true,
    isInitialized: false,
    error: null,
  });

  useEffect(() => {
    const isUserAuth = localStorageService.getAuthData();

    (async () => {
      if (!isUserAuth) {
        try {
          const res = await API.authUser();

          await localStorageService.setAuthData(res.data);
        } catch (e) {
          setData(prevState => ({
            ...prevState,
            loading: false,
            error: e,
          }));
          throw new Error('Error! Проблема в API.authUser()');
        }
      }

      setData(prevState => ({
        ...prevState,
        loading: false,
        isInitialized: true,
      }));
    })();
  }, []);

  return {
    loading: data.loading,
    isInitialized: data.isInitialized,
    error: data.error,
  };
};
