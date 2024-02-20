import React, { createContext, useState} from "react";

export const AuthContext = createContext(null);

const userContext = ({ children }) => {
  const [user, setUser] = useState({ name: '', email: '',id:'' });

    return (
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    );
  };

export default userContext;
