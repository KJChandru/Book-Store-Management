// AuthContext.js (or use Redux for state management)
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userData, setUserData] = useState(null); 

  const signIn = (userData) => {
    
    setIsLoggedIn(true);
    setUserData(userData);
    
    localStorage.setItem('token', userData.token);
  };

  const signOut = () => {
    
    setIsLoggedIn(false);
    setUserData(null);
    
    localStorage.removeItem('token');
  
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
