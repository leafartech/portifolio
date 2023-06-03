import styles from './SubNavbar.module.css'
import MyLink from '../MyLink'

export default function SubNavbar({title, path, first, data}) {
    return (
        <li className={ styles.subnavbar}>
            <h5 style={{ textTransform: 'capitalize'}}>{Object.keys(data)[0].replace(/-/g, ' ')}</h5>
            <ul>
                {Object.values(data)[0].map((data2, index) => (
                    <li key={index}>
                        <MyLink path={`/blog/${Object.keys(data)[0]}/${data2.title.replace(/\s/g, '-').toLowerCase()}`}>{data2.title}</MyLink>
                    </li>
                ))}
            </ul>
        </li>
    )
}