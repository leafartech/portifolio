import styles from './HomeScreen.module.css'
import Header from '../../components/Header'
import ProjectPreview from '../../components/ProjectPreview'
import Container from '../../components/Container'

export default function HomeScreen() {
    return (
        <div className={ styles['home-screen']}>
            <Header />
            <main className={ styles.main }>
                <Container>
                    <ProjectPreview />
                </Container>
            </main>
        </div>
    )
}