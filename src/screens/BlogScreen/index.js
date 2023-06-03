import styles from './BlogScreen.module.css'
import Header from '../../components/Header'
import BlogTemplate from '../../components/BlogTemplate'
import Main from '../../components/Main'

export default function BlogScreen() {
    return (
        <div className={ styles['blog-screen'] }>
            <Header secondary={true} />
            <Main center={true}>
                <BlogTemplate />
            </Main>
        </div>
    )
}