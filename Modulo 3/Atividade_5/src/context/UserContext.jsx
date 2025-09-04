import { createContext, useCallback, useMemo, useState, useContext } from "react";

export const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export function UserProvider({children}){
    const [user,setUser] = useState('')


    const login = (username) => {
        setUser( username )
    }

    const logout = () => setUser(null)

    return <UserContext.Provider value={ {user, login, logout}} >{children}</UserContext.Provider>
}