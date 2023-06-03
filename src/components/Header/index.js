import styles from './Header.module.css'
import Navbar from '../Navbar'
import TextBig from '../Text'

export default function Header({ secondary, terciary }) {
    if (secondary) {
        return (
            <header className={ styles['header-2'] }>
                <Navbar secondary={secondary} terciary={terciary} />
            </header>
        )
    }
    return (
        <header className={ styles.header }>
            <Navbar />
            <div className={ styles.text }>
                <TextBig top="Desenvolvedor web" bottom="ACOMPANHE MINHA JORNADA NO MUNDO DA PROGRAMAÇÃO 👇">Rafael Borges Bezerra</TextBig>
            </div>
        </header>
    )
}