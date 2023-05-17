import Link from 'next/link'
import styles from './Navbar.module.css'
import MyLink from '../MyLink'

export default function Navbar() {
    return (
        <div className={ styles.navbar }>
            <nav>
                <ul>
                    <li>
                        <MyLink path="/">Início</MyLink>
                    </li>
                    <li>
                        <MyLink path="/contato">Contato</MyLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}