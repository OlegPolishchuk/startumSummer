import { ReactNode, useMemo, useState } from 'react';

import { Vacancy } from 'api/types';
import { FavoritesContext } from 'context';
import { FavoriteContextData } from 'context/FavoritesContext';

interface Props {
  children: ReactNode;
}

export const ContextWrapper = ({ children }: Props) => {
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
