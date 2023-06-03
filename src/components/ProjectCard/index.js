import Link from 'next/link'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ path, href, children, img, title, desc}) {
    return (
        <Link href={href} className={ `${styles['project-card']}`}>
            <div>
                <img src={`./images/projects/${path}.png`} alt={title} />
            </div>
            <div className={ styles['card-body'] }>
                <h3>{title}</h3>
                <p>
                {/* <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M23.768,11.448l-4.418-4.361c-.498-.492-1.35-.143-1.35,.552v3.361H1c-.553,0-1,.448-1,1s.447,1,1,1H18v3.361c0,.695,.852,1.044,1.35,.552l4.418-4.361c.309-.305,.309-.799,0-1.104Z"/></svg> */}
                {desc}
                </p>
            </div>  
        </Link>
    )
}