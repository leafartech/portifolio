import styles from './Text.module.css'

export default function Text({children, tag, main, top}) {
    const Tag = tag

    return (
        <Tag className={ `${main ? styles.mainText : ''} ${styles.text} ${top ? styles.top : ''}`}>{children}</Tag>
    )
}