import styles from './BlogTemplate.module.css'
import BlogNavbar from '../BlogNavbar/index'
import BlogNavbar2 from '../BlogNavbar2'
import BlogContent from '../BlogContent'
import Container from '../Container'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function BlogTemplate() {
    const [ userData, setUserData ] = useState({})
    useEffect(() => {
        axios.get('/api/GET').then(res => {
            setUserData(res.data)
        }).catch(e => console.log(e))
    }, [])

    return (
        <div className={ styles['blog-template']}>
            {Object.keys(userData).length > 0 ? 
                <>
                    <div>
                        <BlogNavbar userData={userData} />
                    </div>
                    <Container>
                        <BlogContent blogData={[]} />
                    </Container>
                    <div>
                        <BlogNavbar2 blogTopics={{topics: [' ']}} />
                    </div>
                </>
            : ''}
        </div>
    )
}

//UTILIZAR getServerSideProps ou getStaticPath