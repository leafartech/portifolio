import styles from './ProjectPreview.module.css'
import ProjectCard from '../ProjectCard'
import Link from 'next/link'

export default function ProjectPreview() {
    return (
        <div className={ styles['project-preview']}>
            <ul>
                <li><ProjectCard href="/" path="2" title="Finanças" desc="Plataforma para gestão financeira, com plano de metas e dashboards."/></li>
                <li className={ styles.bottom }><ProjectCard href="/" path="1" title="Sales Hub" desc="Plataforma para gestão de: vendas, equipe, produtos e estratégias."/></li>
                <li><ProjectCard href="/" path="3" title="managefly" desc="Gestão de projetos, tarefas e controle financeiro simples"/></li>
                <li><ProjectCard href="/" path="4" title="Página de vendas" desc="Página de vendas"/></li>
                <li className={ styles.bottom }><ProjectCard href="/" path="5" title="Em breve" desc="[...]"/></li>
                <li><ProjectCard href="/" path="5" title="Em breve" desc="[...]"/></li>
            </ul>
            <Link href='/projetos'>
                <span>projetos </span>
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z"/></svg>   
            </Link>
        </div>
    )
}