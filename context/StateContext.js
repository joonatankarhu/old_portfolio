import React, { createContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [navHeight, setNavHeight] = useState(0);

  return (
    <Context.Provider
      value={{
        navHeight,
        setNavHeight,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => React.useContext(Context);