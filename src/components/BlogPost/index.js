import styles from './BlogPost.module.css'

export default function BlogPost({topicTitles, topicContent, quantity, inptChange}) {
    return (
        Object.keys(quantity).map((index) => (
            <div key={index} className={ styles['blog-topic']}>
                <input className={ styles.title } type="" name="topicTitle" value={topicTitles[index]} onChange={e => inptChange(e, index)}/>
                <textarea className={ styles.paragraph } type="" name="topicContent" value={topicContent[index]} onChange={e => inptChange(e, index)} />
            </div>
        ))
    )
}