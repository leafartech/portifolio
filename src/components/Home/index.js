import Text from '../Text'
import styles from './Home.module.css'

export default function HomeMain() {
    return (
        <div className={ styles.home }>
            <div className={ styles.text }>
                <Text tag="p">Opa, eu me chamo Rafael, moro atualmente na Bahia, Brasil e sou um entusiasta por programação.</Text>
                <Text main={true} tag="p">No momento, aprofundo meus conhecimentos criando sistemas.</Text>
                <Text tag="p">Tenho focado os estudos em React, Next, Node, CSS, Web Design, UX e easy-to-use interfaces.</Text>
                <Text tag="p">Pretendo aos poucos implementar funcionalidades aqui.</Text>
            </div>
            <div className={ styles.image }>
                <img src="./images/me.png" alt="Imagem minha - Rafael Borges Bezerra"/>
            </div>
        </div>
    )
}