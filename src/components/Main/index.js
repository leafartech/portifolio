import styles from './Main.module.css'

export default function Main({ children, center }) {
    return (
        <main className={ `${center ? styles.center : ''} ${styles.main}` }>
            {children}
        </main>
    )
}