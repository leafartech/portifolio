import Link from 'next/link'
import styles from './Navbar.module.css'
import MyLink from '../MyLink'
import { useContext, useEffect, useState } from 'react'
import { sessionContext } from '../../../context/Session'

export default function Navbar() {
    const session = useContext(sessionContext)
    const [ userData, setUserData ] = useState({})
    useEffect(() => {
        setUserData(JSON.parse(session.getUser()) || {})
    }, [])

    return (
        <div className={ styles.navbar }>
            <nav>
                <ul>
                    <li>
                        <MyLink path="/">Início</MyLink>
                    </li>
                    <li>
                        <MyLink path="/blog">Blog</MyLink>
                    </li>
                    <li>
                        <MyLink path="/contato">Contato</MyLink>
                    </li>
                    {Object.keys(userData).length > 0 ?
                    <li>
                        <MyLink path="/novoprojeto">Projetos</MyLink>
                    </li>
                    : ''}
                </ul>
            </nav>
        </div>
    )
}