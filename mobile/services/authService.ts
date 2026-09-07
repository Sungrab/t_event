import api from './api';

export async function login(email: string, password: string) {
  return api.post('/login', { email, password });
}

export async function register(nom: string, prenom: string, email: string, password: string) {
  return api.post('/register', { nom, prenom, email, password });
}
