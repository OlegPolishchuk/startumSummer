import { instance } from 'api/instance';
import { AuthUserResponse, VacanciesRequestFilterData } from 'api/types';

const login = import.meta.env.VITE_LOGIN;
const password = import.meta.env.VITE_PASSWORD;
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const hr = import.meta.env.VITE_HR;

export const API = {
  authUser() {
    return instance.get<AuthUserResponse>(`password/`, {
      params: {
        login,
        password,
        clientId,
        clientSecret,
        hr,
      },
    });
  },

  getVacancies({
    payment_to,
    payment_from = 0,
    keyword = '',
  }: VacanciesRequestFilterData) {
    return instance.get(`vacancies/`, {
      params: {
        keyword,
        payment_from,
        payment_to: payment_to ?? '',
      },
    });
    // &client_secret=${process.env.CLIENT_SECRET}
    // console.log('secterKey =>> ', import.meta.env.VITE_X_SECRET_KEY);
    // return fetch(
    //   `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?keyword=${keyword}&payment_from=${payment_from}&payment_to=${payment_to}`,
    //   {
    //     headers: {
    //       'x-secret-key': import.meta.env.VITE_X_SECRET_KEY as string,
    //     },
    //   },
    // );
  },

  getProfessionCatalogues() {
    return instance.get(`catalogues/`);
    // return fetch(`https://api.superjob.ru/2.0/catalogues/`);
  },
};
