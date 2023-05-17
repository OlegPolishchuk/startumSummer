import { useCallback, useContext, useEffect, useState } from 'react';

import { Vacancy } from 'api/types';
import { FavoritesContext } from 'context';
import { localStorageService } from 'services';

export const useToggleFavorite = (vacancy: Vacancy) => {
  const { setFavoriteVacancies } = useContext(FavoritesContext);

  const [isCurrentVacancyFavorite, setIsCurrentVacancyFavorite] = useState(false);

  const { setToFavorites, getFavoriteVacancies, removeFromFavorites } =
    localStorageService;

  const toggleIsFavorite = useCallback(() => {
    if (!isCurrentVacancyFavorite) {
      setToFavorites(vacancy);

      setFavoriteVacancies(favoriteVacancies => [...favoriteVacancies, vacancy]);
    }

    if (isCurrentVacancyFavorite) {
      removeFromFavorites(vacancy.id);

      setFavoriteVacancies(favoriteVacancies =>
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
  }, []);

  return { isFavorite: isCurrentVacancyFavorite, toggleIsFavorite };
};
