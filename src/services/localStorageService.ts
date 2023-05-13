import { AuthUserResponse } from 'api/types';

export const localStorageService = {
  setAuthData(data: AuthUserResponse) {
    localStorage.setItem('authData', JSON.stringify(data));
  },

  getAuthData(): AuthUserResponse {
    const data = localStorage.getItem('authData') as string;

    return JSON.parse(data);
  },
};
