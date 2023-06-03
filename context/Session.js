import { createContext } from "react";

export const sessionContext = createContext({})

export default function SessionProvider({ children }) {
    const setUser = (userData) => {
        localStorage.setItem('portifolio', JSON.stringify(userData))
    }
    const getUser = () => {
        let user = localStorage.getItem('portifolio')
        return user
    }
    const deleteUser = () => {
        localStorage.removeItem('portifolio')
        return
    }
    return <sessionContext.Provider value={{ setUser, getUser, deleteUser }}>{children}</sessionContext.Provider>
}