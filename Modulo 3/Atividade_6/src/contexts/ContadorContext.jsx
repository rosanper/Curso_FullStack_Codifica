import { createContext, useState, useEffect } from "react";

export const ContadorContext = createContext();

export function ContadorProvider({ children }) {
  const getLocalStorage = () => {
    const data = localStorage.getItem("adicionados");
    return data ? JSON.parse(data) : [];
  };

  const [contador, setContador] = useState(getLocalStorage().length);


  return (
    <ContadorContext.Provider value={{contador, setContador}}>
      {children}
    </ContadorContext.Provider>
  );
}