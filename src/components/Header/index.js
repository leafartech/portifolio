import styles from './Header.module.css'

export default function Header({children}) {
    return (
        <div className={ styles.header }>
            <h4>Rafael Bezerra</h4>
            <p>Especialista em desenvolvimento Web</p>
        </div>
    )
}