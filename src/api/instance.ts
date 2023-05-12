import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/',
  headers: {
    'x-secret-key': import.meta.env.VITE_X_SECRET_KEY as string,
  },
});
