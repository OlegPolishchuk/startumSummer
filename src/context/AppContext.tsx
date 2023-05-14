import { createContext } from 'react';

import { Vacancy } from 'api/types';

export interface ContextData {
  isInitialized: boolean;
  favoriteVacancies: Vacancy[];
  setFavoritesVacancies: () => void;
}
export const AppContext = createContext<ContextData>({
  isInitialized: false,
  favoriteVacancies: [],
  setFavoritesVacancies: () => {},
});
