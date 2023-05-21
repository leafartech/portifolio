import Text from '../Text'
import styles from './Projetos.module.css'

export default function ProjetosData() {
    return (
        <section className={ styles.projects }>
            <article>
                <Text tag="h3">Managefly</Text>
                <p>Projeto desenvolvido com React.js em cerca de 15 dias</p>
            </article>
        </section>
    )
}