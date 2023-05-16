import React, { createContext } from 'react';

import { Vacancy } from 'api/types';

export interface ContextData {
  isInitialized: boolean;
  favoriteVacancies: Vacancy[];
  setFavoritesVacancies: React.Dispatch<React.SetStateAction<Vacancy[]>>;
}
export const AppContext = createContext<ContextData>({
  isInitialized: false,
  favoriteVacancies: [],
  setFavoritesVacancies: () => {},
});
