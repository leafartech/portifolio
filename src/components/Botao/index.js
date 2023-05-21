import styles from './Botao.module.css'

export default function Botao({ type, text}) {
    return (
        <button type={ type } className={ styles.botao }>{text}</button>
    )
}