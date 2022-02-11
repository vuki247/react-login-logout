import React from "react";

// AuthContext - an object that also contains components
const AuthContext = React.createContext({
  isLoggedId: false,
});

export default AuthContext;
