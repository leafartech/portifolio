import Header from '../../components/Header'
import Main from '../../components/Main'
import MyLink from '../../components/MyLink'
import styles from './AdminScreen.module.css'

export default function AdminScreen() {
    return (
        <div className={ styles['admin-screen']}>
            <Header secondary={true}/>

            <Main>
                <div className={ styles.central}>
                    <MyLink path="/blog/newpost" button={true}>Novo post Blog</MyLink>
                </div>
            </Main>
        </div>
    )
}