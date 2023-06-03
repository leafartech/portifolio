import { GetStaticProps } from 'next'
import SubNavbar from '../Subnavbar'
import styles from './BlogNavbar.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function BlogNavbar({ secondary, terciary }) {
    const [ userData, setUserData ] = useState([])
    useEffect(() => {
        axios.get('/api/GET').then(res => {
            setUserData(res.data)
        }).catch(e => console.log(e))
    }, [])
    
    return (
        <nav className={ styles['blog-navbar']}>
            <div className={ styles.search}>
                <input type="search" placeholder="Buscar..."/>
            </div>
            <div className={ styles.top }>
                {terciary ?
                <img src="../../images/blog/icon.png"/>
                :
                <>
                {secondary ? 
                <img src="../images/blog/icon.png"/>
                :
                <img src="./images/blog/icon.png"/>
                }
                </>
                }
                <div>
                    <h5>Blog</h5>
                    <p>Alguns registros meus</p>
                </div>
            </div>
            <ul>
                {userData.length > 0 ?
                userData.map((post, index) => (
                    <SubNavbar key={index} data={post} />
                ))
                : ''}
            </ul>
        </nav>
    )
}