import MyLink from '../MyLink'
import styles from './Blog.module.css'

export default function ListLinks({ list, projects }) {
    return (
        <ul className={ styles.blogList }>
            {projects ?
            list.map((item, index) => (
                <li>
                    {console.log(item)}
                    <MyLink second={true} path={`projetos/:${index+1}`}>{item.name}</MyLink>
                </li>
            ))
            :
            <>
            {list.map((item) => (
            <li>
                <MyLink second={true} path={`${item.path}`}>{item.text}</MyLink>
            </li>
            ))}
            </>
            }
        </ul>
    )
}