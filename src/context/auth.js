import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const Auth = createContext({
  isLogedIn: true,
});

export function AuthProvider({ children }) {
  const [isLogedIn, setIsLogedIn] = useState(true);
  useEffect(() => {
    setIsLogedIn(true);
  }, [setIsLogedIn]);
  return (
    <Auth.Provider
      value={{
        isLogedIn: isLogedIn,
      }}
    >
      {children}
    </Auth.Provider>
  );
}

export default Auth;
