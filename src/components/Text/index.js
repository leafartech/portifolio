import styles from './Text.module.css'

export default function TextBig({children, top, bottom}) {
    return (
        <div className={ styles['text-big']}>
            <h3>{top}</h3>
            <h1>{children}</h1>
            <h4>{bottom}</h4>
        </div>
    )
}