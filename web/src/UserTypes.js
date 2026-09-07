// Simple helper that creates payloads for user actions.
// These are intentionally plain JS functions so they can be imported in plain JS code.

export function RegisterUser(username, email, password) {
  return {
    type: 'REGISTER_USER',
    payload: { username, email, password },
  };
}

export function LoginUser(email, password) {
  return {
    type: 'LOGIN_USER',
    payload: { email, password },
  };
}
