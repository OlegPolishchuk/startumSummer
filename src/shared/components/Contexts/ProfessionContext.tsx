import { ReactNode, useEffect, useMemo, useState } from 'react';

import { FavoritesVacanciesContext } from './FavoritesContextWrapper';

import { Profession } from 'api/types';
import { ProfessionContextData, Professions } from 'context/ProfessionContext';

interface Props {
  professionList: Profession[];
  children: ReactNode;
}
export const ProfessionContext = ({ professionList, children }: Props) => {
  const [profList, setProfList] = useState(professionList);

  const professionListContextData: ProfessionContextData = useMemo(
    () => ({
      professionList: profList,
      setProfessionList: setProfList,
    }),
    [profList],
  );

  useEffect(() => {
    setProfList(professionList);
  }, [professionList]);

  return (
    <Professions.Provider value={professionListContextData}>
      <FavoritesVacanciesContext>{children}</FavoritesVacanciesContext>
    </Professions.Provider>
  );
};
