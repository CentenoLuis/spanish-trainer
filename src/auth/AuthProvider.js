import React, { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState({ name: "luis", role: "regular" });
  // const [user, setUser] = useState({});
  // const [user, setUser] = useState({ name: "luis", role: "admin" });

  const contextValue = {
    user,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
