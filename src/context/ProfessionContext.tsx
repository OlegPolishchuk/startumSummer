import React, { createContext } from 'react';

import { Profession } from 'api/types';

export interface ProfessionContextData {
  professionList: Profession[];
  setProfessionList: React.Dispatch<React.SetStateAction<Profession[]>>;
}
export const Professions = createContext<ProfessionContextData>({
  professionList: [],
  setProfessionList: () => {},
});
