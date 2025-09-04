import { createContext, useCallback, useMemo, useState } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({children}){
    const [theme,setTheme] = useState('light')

    const toggleTheme = useCallback(() => setTheme(theme === 'light' ? 'dark' : 'light'),[theme])

    const value = useMemo(() => ({theme,toggleTheme}), [theme,toggleTheme])

    return <ThemeContext.Provider value={value} >{children}</ThemeContext.Provider>
}