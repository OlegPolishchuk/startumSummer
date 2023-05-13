import { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { Vacancy } from 'api/types';

interface VacanciesContextData {
  vacancies: Vacancy[];
  total: number;
}
export const VacanciesContext = createContext<VacanciesContextData>({
  vacancies: [],
  total: 0,
});

export const useVacancies = () => {
  const { vacancies, total } = useContext(VacanciesContext);
  const [newVacancies, setNewVacancies] = useState<Vacancy[]>(vacancies);

  const setVacancies = useCallback(
    (vacancies: Vacancy[]) => setNewVacancies(vacancies),
    [],
  );

  useEffect(() => {
    setNewVacancies(vacancies);
  }, [vacancies]);

  return { vacancies: newVacancies, total, setVacancies };
};
