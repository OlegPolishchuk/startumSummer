import { useEffect, useState } from 'react';

import { API } from 'api/API';
import { Profession } from 'api/types';
import { localStorageService } from 'services';

interface Data {
  loading: boolean;
  isInitialized: boolean;
  error: any;
  professionList: Profession[];
}
export const useInitializeApp = () => {
  const [data, setData] = useState<Data>({
    loading: true,
    isInitialized: false,
    error: null,
    professionList: [],
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

      const res = await API.getProfessionCatalogues();
      const professionList = res.data;

      setData(prevState => ({
        ...prevState,
        professionList,
        loading: false,
        isInitialized: true,
      }));
    })();
  }, []);

  return { ...data };
};
