
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [count, setcount] = useState(0);


useEffect(() => {
  const user = localStorage.getItem('user');
  if (user) {
    setCurrentUser(JSON.parse(user));
  }
}, []);
  function login(userData) {
      setCurrentUser(userData.data);
      localStorage.setItem('user', JSON.stringify(userData.data));
      localStorage.setItem('token', userData.token);

  }

  function logout() {
    localStorage.clear();
    setCurrentUser(null);
    setcount(1)
  }

  const value = {
    currentUser,
    count,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
