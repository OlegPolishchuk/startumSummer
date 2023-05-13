import axios from 'axios';

import { localStorageService } from 'services';

export const instance = axios.create({
  baseURL: 'https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/',
  headers: {
    'x-secret-key': import.meta.env.VITE_X_SECRET_KEY as string,
  },
});

instance.interceptors.request.use(async config => {
  const newConfig = { ...config };

  if (typeof window !== 'undefined') {
    const authData = localStorageService.getAuthData();

    console.log({ authData });

    if (authData) {
      const { access_token, token_type } = authData;

      newConfig.headers.Authorization = `${token_type} ${access_token}`;
    }
  }

  newConfig.headers.set('X-Api-App-ID', import.meta.env.VITE_CLIENT_SECRET);

  return newConfig;
});
