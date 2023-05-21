import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={ styles.footer }>
            <Link target='_blank' href="https://www.instagram.com/o.rafael.bezerra/">@o.rafael.bezerra<span> - Acompanhe minha jornada no instagram </span></Link>
        </div>
    )
}