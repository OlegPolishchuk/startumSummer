import { useCallback, useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

export const usePageSearchParam = (startPage = 1) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(startPage);

  const currentPage = searchParams.get('page');

  const setPageSearchParams = useCallback((nextPage: number) => {
    searchParams.set('page', `${nextPage}`);

    setSearchParams(searchParams);
  }, []);

  useEffect(() => {
    if (currentPage) {
      setPage(Number(currentPage));
    }
  }, [currentPage]);

  return { page, setPageSearchParams };
};
