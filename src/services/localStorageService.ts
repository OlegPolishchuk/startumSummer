import { AuthUserResponse, Vacancy } from 'api/types';

export const localStorageService = {
  setAuthData(data: AuthUserResponse) {
    localStorage.setItem('authData', JSON.stringify(data));
  },

  getAuthData(): AuthUserResponse {
    const data = localStorage.getItem('authData') as string;

    return JSON.parse(data);
  },

  setToFavorites(vacancy: Vacancy) {
    const existedVacancies = localStorageService.getFavoriteVacancies();

    existedVacancies.push(vacancy);
    localStorage.setItem('favoritesVacancies', JSON.stringify(existedVacancies));
  },

  removeFromFavorites(vacancyId: number) {
    const existedFavorites = localStorageService.getFavoriteVacancies();
    const updatedFavorites = existedFavorites.filter(vacancy => vacancy.id !== vacancyId);

    localStorage.setItem('favoritesVacancies', JSON.stringify(updatedFavorites));
  },

  getFavoriteVacancies(): Vacancy[] {
    return JSON.parse(localStorage.getItem('favoritesVacancies') as string) || [];
  },
};
