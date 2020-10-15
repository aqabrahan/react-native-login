import { API_URL } from '../../secret';
import { getToken } from './token';

const getHeaders = async () => {
  const token = await getToken();
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (token) {
    //headers.Authorization = `Bearer ${token}`;
    headers = {
      ...headers,
      'access-token': token,
    };
  }

  return headers;
};

export const post = async (destination, body) => {
  const headers = await getHeaders();

  const result = await fetch(`${API_URL}${destination}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });

  if (result.ok) {
    return await result.json();
  }
  const { status } = result;
  throw { status, message: 'Email and/or password are incorrect.' };
};

export const get = async (destination) => {
  const headers = await getHeaders();

  const result = await fetch(`${API_URL}${destination}`, {
    method: 'GET',
    headers,
  });

  if (result.ok) {
    return await result.json();
  }

  throw { error: result.status };
};