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

  const [data, setData] = useState({
    pageCount: 1,
    loading: true,
    isVacancyInAction: false,
  });

  const { elementsCount } = SearchParams;

  const fetchFavoriteVacancies = () => {
    const favorites = localStorageService.getFavoriteVacancies();

    const startIndex = +page * elementsCount - elementsCount;
    const endIndex = +page * elementsCount;
    const vacanciesChunk = favorites.slice(startIndex, endIndex);

    if (vacanciesChunk.length === 0 && page !== 1) {
      setPageSearchParams(page - 1);
    }

    setFavoriteVacancies(vacanciesChunk);

    const pageCount = getPageCount({
      total: favorites.length,
      elementsOnPage: SearchParams.elementsCount,
    });

    setData(prevState => ({ ...prevState, pageCount }));
  };

  useEffect(() => {
    setData(prevState => ({ ...prevState, loading: true }));
    fetchFavoriteVacancies();

    setTimeout(() => {
      setData(prevState => ({ ...prevState, loading: false }));
    }, TIMEOUT);
  }, [page]);

  useEffect(() => {
    setData(prevState => ({ ...prevState, isVacancyInAction: true }));
    fetchFavoriteVacancies();

    setTimeout(() => {
      setData(prevState => ({ ...prevState, isVacancyInAction: false }));
    }, TIMEOUT);
  }, [favoriteVacancies.length]);

  const { isVacancyInAction, loading, pageCount } = data;

  return {
    favoriteVacancies,
    pageCount,
    loading,
    isVacancyInAction,
  };
};
