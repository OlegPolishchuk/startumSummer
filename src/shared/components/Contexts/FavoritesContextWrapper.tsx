import { ReactNode, useMemo, useState } from 'react';

import { Vacancy } from 'api/types';
import { FavoritesContext, FavoriteContextData } from 'context';

interface Props {
  children: ReactNode;
}

export const FavoritesVacanciesContext = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<Vacancy[]>([]);

  const contextValue: FavoriteContextData = useMemo(
    () => ({
      favoriteVacancies: favorites,
      setFavoriteVacancies: setFavorites,
    }),
    [favorites],
  );

  return (
    <FavoritesContext.Provider value={contextValue}>{children}</FavoritesContext.Provider>
  );
};
