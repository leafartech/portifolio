import { createContext } from "react";

export const sessionContext = createContext({})

export default function SessionProvider({ children }) {
    const setUser = (userData) => {
        localStorage.setItem('user-blog', JSON.stringify(userData))
    }
    const getUser = () => {
        let user = localStorage.getItem('user-blog')
        return user
    }
    const deleteUser = () => {
        console.log('entrou em')
        localStorage.removeItem('user-blog')
        return
    }
    return <sessionContext.Provider value={{ setUser, getUser, deleteUser }}>{children}</sessionContext.Provider>
}