import styles from './Text.module.css'

export default function Text({children, tag, main}) {
    const Tag = tag

    return (
        <Tag className={ `${main ? styles.mainText : ''} ${styles.text}` }>{children}</Tag>
    )
}