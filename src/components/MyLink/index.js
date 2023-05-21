import Link from "next/link";
import styles from './MyLink.module.css'
import { useRouter } from "next/router";

export default function MyLink({children, path, second}) {

    if (second) {
        return (
            <Link href={path} className={ `${styles['navlink-second']}` }>{children}</Link>
        )
    }

    const router = useRouter()
    return (
        <Link href={path} className={ `${styles.navlink} ${router.pathname === path ? styles.active : ''}` }>{children}</Link>
    )
}