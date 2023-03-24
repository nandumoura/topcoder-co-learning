import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase-config";

export const AuthContext = React.createContext();

export function AuthProvider({ children, value }) {
  const [currentUser, setCurrentUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
  });
  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
}

export function useAuthValue() {
  return useContext(AuthContext);
}
