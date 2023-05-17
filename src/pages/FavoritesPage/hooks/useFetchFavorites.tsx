import { SearchParams } from 'constants';

import { useContext, useEffect, useState } from 'react';

import { getPageCount } from 'utils';

import { FavoritesContext } from 'context';
import { usePageSearchParam } from 'hooks';
import { localStorageService } from 'services';

const TIMEOUT = 300;

export const useFetchFavorites = () => {
  const { favoriteVacancies, setFavoriteVacancies } = useContext(FavoritesContext);
  const { page, setPageSearchParams } = usePageSearchParam();

  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(true);

  const { elementsCount } = SearchParams;

  const fetchFavoriteVacancies = () => {
    const favorites = localStorageService.getFavoriteVacancies();

    const startIndex = +page * elementsCount - elementsCount;
    const endIndex = +page * elementsCount;
    const vacanciesChunk = favorites.slice(startIndex, endIndex);

    console.log(`startIndex =`, startIndex);
    console.log(`endIndex =`, endIndex);
    console.log(`vacanciesChunk =`, vacanciesChunk);
    console.log(`page =`, page);

    if (vacanciesChunk.length === 0 && page !== 1) {
      setPageSearchParams(page - 1);
    }

    setFavoriteVacancies(vacanciesChunk);

    setPageCount(
      getPageCount({
        total: favorites.length,
        elementsOnPage: SearchParams.elementsCount,
      }),
    );
  };

  useEffect(() => {
    setLoading(true);
    fetchFavoriteVacancies();

    setTimeout(() => {
      setLoading(false);
    }, TIMEOUT);
  }, [page]);

  useEffect(() => {
    fetchFavoriteVacancies();
  }, [favoriteVacancies.length]);

  return {
    favoriteVacancies,
    pageCount,
    setPageCount,
    loading,
  };
};
