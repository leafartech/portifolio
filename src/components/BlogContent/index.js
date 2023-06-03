import styles from './BlogContent.module.css'

export default function BlogContent({ blogData }) {
    if (Object.keys(blogData).length > 0) {
        return (
            <article className={ styles.article }>
                <div className={ styles['content']}>
                    <h1>{blogData.title}</h1>
                    <p>{blogData.description}</p>
                </div>
                {blogData['topics'].map((topicTitle, index) => (
                    <div key={index} className={ `${styles['not-first']} ${styles['content']}` }>
                        <h1>{topicTitle}</h1>
                        <div className={ styles.text }>
                            <p>{blogData.contents[index]}</p>
                        </div>
                    </div>
                ))}
            </article>
        )
    }
    return (
        <article className={ styles.article }>
            <div className={ styles['content']}>
                <h1>Meu Blog</h1>
                <p>Aqui, você vai encontrar alguns registros meus.</p>
            </div>
            <div className={ `${styles['not-first']} ${styles['content']}`}>
                <h1>Objetivo</h1>
                <div className={ styles.text}>
                    <p>A palavra "objetivo" possui diversos significados e aplicações em diferentes contextos. Em seu sentido mais amplo, "objetivo" refere-se a um alvo, propósito ou meta que se busca alcançar. </p>
                    <p>É aquilo que direciona nossas ações e nos impulsiona a trabalhar em direção a um determinado resultado.</p>
                </div>
            </div>
        </article>
    )
}