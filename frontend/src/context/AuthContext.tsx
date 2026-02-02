import React, { createContext, useState, useEffect, useContext } from 'react';
import { login, logout } from '../services/authService'; // Assuming these functions are available
import { BackendUser } from '../components/types'; // Assuming BackendUser type

interface AuthContextType {
  user: BackendUser | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  loginUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<BackendUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check local storage or session storage for a stored user/token
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await login(email, password);
      const loggedInUser = response.data.user; // Assuming response has data.user
      setUser(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    logout(); // Call backend logout
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isAdmin, loginUser, logoutUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
