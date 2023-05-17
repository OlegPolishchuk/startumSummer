import React, { createContext } from 'react';

import { Vacancy } from 'api/types';

export interface FavoriteContextData {
  favoriteVacancies: Vacancy[];

  setFavoriteVacancies: React.Dispatch<React.SetStateAction<Vacancy[]>>;
}

export const FavoritesContext = createContext<FavoriteContextData>({
  favoriteVacancies: [],
  setFavoriteVacancies: () => {},
});
