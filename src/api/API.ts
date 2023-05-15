import { SearchParams } from 'constants';

import { instance } from 'api/instance';
import {
  AuthUserResponse,
  Profession,
  VacanciesRequestFilterData,
  VacancyResponse,
} from 'api/types';

const login = import.meta.env.VITE_LOGIN;
const password = import.meta.env.VITE_PASSWORD;
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const hr = import.meta.env.VITE_HR;

export const API = {
  authUser() {
    return instance.get<AuthUserResponse>(`oauth2/password/`, {
      params: {
        login,
        password,
        client_id: clientId,
        client_secret: clientSecret,
        hr,
      },
    });
  },

  getVacancies(filterParams: VacanciesRequestFilterData) {
    return instance.get<VacancyResponse>(`vacancies/`, {
      params: {
        ...filterParams,
        count: SearchParams.elementsCount,
      },
    });
  },

  getProfessionCatalogues() {
    return instance.get<Profession[]>(`catalogues`);
  },
};
