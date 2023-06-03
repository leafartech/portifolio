import styles from './Widget.module.css'

export default function Widget({type, title, children}) {
    return (
        <div className={ styles.widget }>
            <h5>{title}</h5>
            {children}
        </div>
    )
}