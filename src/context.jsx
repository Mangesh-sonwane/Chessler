import { createContext, useContext, useState } from 'react';

export const appContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const val = {
    user,
    setUser,
  };

  return <appContext.Provider value={val}>{children}</appContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(appContext);
};
