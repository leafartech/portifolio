import { useEffect, useState } from "react"
import MyLink from "../MyLink"
import ToggleTheme from "../ToggleTheme"

function Navbar() {
    const [ user, setUser] = useState({})
    useEffect(() => {
        setUser(JSON.stringify(localStorage.getItem('portfolio')) || {})
    }, [])

    return (
        <nav className="fixed top-0 bg-gray-50 flex justify-center border-b w-full border-gray-300 p-4 opacity-90 backdrop-filter backdrop-blur-lg">
            <ul className="flex-1 flex justify-start gap-3 max-w-my sm:px-6">
                <li><MyLink path="/">Início</MyLink></li>
                <li><MyLink path="/blog">Blog</MyLink></li>
                {Object.keys(user).length > 0 ?
                <li><MyLink path="/admin">Admin</MyLink></li>
                : ''}
            </ul>
            {/* <ToggleTheme /> */}
        </nav>
    )
}

export default Navbar