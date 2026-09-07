export interface User {
  id: string;
  email: string;
  username: string;
  is_email_verified: boolean;
  created_at: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface RegisterRequest {
  email: string;
  username: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface GoogleAuthRequest {
  token: string;
}

export interface GoogleUser {
  email: string;
  name: string;
  picture: string;
  sub: string; // Google user ID
  email_verified: boolean;
}
