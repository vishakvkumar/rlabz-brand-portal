import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('rlabz_rajagiri_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);

  const login = (email) => {
    const userData = { email, authenticatedAt: new Date().toISOString() };
    setUser(userData);
    localStorage.setItem('rlabz_rajagiri_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('rlabz_rajagiri_user');
  };

  const isAuthenticated = Boolean(
    user?.email && user.email.toLowerCase().endsWith('@rajagiri.edu')
  );

  const requireAuth = (actionCallback) => {
    if (isAuthenticated) {
      if (typeof actionCallback === 'function') {
        actionCallback();
      }
      return true;
    } else {
      setPendingAction(() => actionCallback);
      setIsAuthModalOpen(true);
      return false;
    }
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setPendingAction(null);
  };

  const completeAuth = (email) => {
    login(email);
    setIsAuthModalOpen(false);
    
    // Execute pending action after successful authentication
    if (pendingAction) {
      setTimeout(() => {
        pendingAction();
        setPendingAction(null);
      }, 300);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        requireAuth,
        isAuthModalOpen,
        closeAuthModal,
        completeAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
