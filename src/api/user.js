import { get } from './fetch';

export const getUsers = () => {
  console.log('#### user to get');
  return get('/users');
};