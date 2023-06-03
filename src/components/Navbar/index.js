import styles from './Navbar.module.css'
import MyLink from '../MyLink'
import { sessionContext } from '../../../context/Session'
import { useContext, useEffect, useState } from 'react'

export default function Navbar({ secondary, terciary }) {
    const [ userData, setUserData ] = useState({})
    const session = useContext(sessionContext)
    useEffect(() => {
        setUserData(JSON.parse(session.getUser()))
    }, [])
    
    return (
        <nav className={ styles.navbar }>
            <div className={ styles.logo }>
                {terciary ?
                <img src="../../images/logo.png" alt="Rafael Borges Bezerra" />
                :
                <>
                {secondary ?
                <img src="../images/logo.png" alt="Rafael Borges Bezerra" />
                :
                <img src="./images/logo.png" alt="Rafael Borges Bezerra" />
                }
                </>
                }
            </div>
            <ul>
                <li>
                    <MyLink path="/">Início</MyLink>
                </li>
                <li>
                    <MyLink path="/projetos">Projetos</MyLink>
                </li>
                <li>
                    <MyLink path="/blog">Blog</MyLink>
                </li>
                <li>
                    <MyLink path="/contato">Contato</MyLink>
                </li>
                {Object.keys(userData).length > 0 ?
                <li>
                    <MyLink path="/admin">Admin</MyLink>
                </li>
                : ''}
            </ul>
        </nav>
    )
}