import React, { createContext, useEffect, useState } from "react";

import { getAccessTokenToLocalStorage } from "../utils/auth";

type UserContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialUserContextType: UserContextType = {
  isAuthenticated: Boolean(getAccessTokenToLocalStorage()),
  setIsAuthenticated: () => null,
};

const UserContext = createContext<UserContextType>(initialUserContextType);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    initialUserContextType.isAuthenticated
  );
  return (
    <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
