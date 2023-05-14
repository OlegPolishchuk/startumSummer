import { useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

export const usePageSearchParam = (startPage = 1) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get('page');

  const setPageSearchParams = useCallback((nextPage: number) => {
    searchParams.set('page', `${nextPage}`);

    setSearchParams(searchParams);
  }, []);

  const page = currentPage ? +currentPage : startPage;

  return { page, setPageSearchParams };
};
