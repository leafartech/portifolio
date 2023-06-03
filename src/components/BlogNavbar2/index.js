import styles from './BlogNavbar2.module.css'

export default function BlogNavbar2({ blogTopics }) {
    if (blogTopics.length > 0) {
        return (
            <nav className={ styles.navbar2 }>
                <h5>Tópicos do post</h5>
                <ul>
                    {blogTopics.map((topic, index) => (
                        <li key={index}>
                            <a>{topic}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}