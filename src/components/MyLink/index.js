import styles from './MyLink.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function MyLink({ children, path, button }) {
    const router = useRouter()

    return (
        <Link href={path} className={ `${button ? styles.btn : ''} ${styles.navlink} ${router.pathname === path ? styles.active : ''}` }>{children}</Link>
    )
}