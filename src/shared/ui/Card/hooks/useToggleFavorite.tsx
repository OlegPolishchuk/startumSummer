import { useCallback, useContext, useEffect, useState } from 'react';

import { Vacancy } from 'api/types';
import { AppContext } from 'context';
import { localStorageService } from 'services';

export const useToggleFavorite = (vacancy: Vacancy) => {
  const { favoriteVacancies, setFavoritesVacancies } = useContext(AppContext);

  const [isCurrentVacancyFavorite, setIsCurrentVacancyFavorite] = useState(false);

  const { setToFavorites, getFavoriteVacancies, removeFromFavorites } =
    localStorageService;

  const toggleIsFavorite = useCallback(() => {
    if (!isCurrentVacancyFavorite) {
      setToFavorites(vacancy);
      setFavoritesVacancies(favoriteVacancies => [...favoriteVacancies, vacancy]);
    }

    if (isCurrentVacancyFavorite) {
      removeFromFavorites(vacancy.id);
      setFavoritesVacancies(
        favoriteVacancies.filter(fVacancy => fVacancy.id !== vacancy.id),
      );
    }

    setIsCurrentVacancyFavorite(prevState => !prevState);
  }, [isCurrentVacancyFavorite]);

  useEffect(() => {
    const favoriteVacancies = getFavoriteVacancies();
    const isFavorite =
      favoriteVacancies.findIndex(fVacancy => fVacancy.id === vacancy.id) !== -1;

    setIsCurrentVacancyFavorite(isFavorite);
    setFavoritesVacancies(favoriteVacancies);
  }, []);

  return { isFavorite: isCurrentVacancyFavorite, toggleIsFavorite };
};
