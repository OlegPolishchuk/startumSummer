import { createContext, useContext } from 'react';

import { Vacancy } from 'api/types';

export const VacanciesContext = createContext<Vacancy[]>([]);

export const useVacancies = () => {
  const vacanciesContext = useContext(VacanciesContext);

  if (!vacanciesContext) {
    throw new Error('vacanciesContext is null');
  }

  return vacanciesContext;
};
