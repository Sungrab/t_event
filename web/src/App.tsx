import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './components/pages/RegisterPage';
import LoginPage from './components/pages/LoginPage';
import HomePage from './components/pages/HomePage';
import { isAuthenticated } from './services/UserService';

function App() {
  return (
    <GoogleOAuthProvider clientId="207389679422-8gc6seju0decapbbqb53imqvrnlsj3sf.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          {/* Routes publiques */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Route protégée - HomePage */}
          <Route 
            path="/home" 
            element={
              isAuthenticated() ? (
                <HomePage />
              ) : (
                <Navigate to="/login" />
              )
            } 
          />
          
          {/* Redirection par défaut */}
          <Route 
            path="/" 
            element={
              isAuthenticated() ? (
                <Navigate to="/home" />
              ) : (
                <Navigate to="/login" />
              )
            } 
          />
          
          {/* 404 - Page non trouvée */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;