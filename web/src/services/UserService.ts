import axios from 'axios';
import type {RegisterRequest, LoginRequest, GoogleAuthRequest, AuthResponse, User } from '../types/UserTypes';

const API_BASE_URL = 'http://localhost:8080/api/auth';

// Inscription classique
export async function registerUser(username: string, email: string, password: string): Promise<AuthResponse> {
  const url = `${API_BASE_URL}/register`;
  const body: RegisterRequest = { username, email, password };
  const res = await axios.post<AuthResponse>(url, body);
  
  // Sauvegarde automatique du token
  if (res.data.token) {
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
  }
  
  return res.data;
}

// Login classique
export async function loginUser(email: string, password: string): Promise<AuthResponse> {
  const url = `${API_BASE_URL}/login`;
  const body: LoginRequest = { email, password };
  const res = await axios.post<AuthResponse>(url, body);
  
  // Sauvegarde automatique du token
  if (res.data.token) {
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
  }
  
  return res.data;
}

// Authentification Google
export async function googleAuth(token: string): Promise<AuthResponse> {
  const url = `${API_BASE_URL}/google`;
  const body: GoogleAuthRequest = { token };
  const res = await axios.post<AuthResponse>(url, body);
  
  // Sauvegarde automatique du token
  if (res.data.token) {
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
  }
  
  return res.data;
}

// Logout
export function logoutUser() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

// Récupérer l'utilisateur connecté
export function getCurrentUser(): User | null {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }
  return null;
}

// Récupérer le token
export function getToken(): string | null {
  return localStorage.getItem('token');
}

// Vérifier si l'utilisateur est connecté
export function isAuthenticated(): boolean {
  return !!getToken();
}