import BlogContent from "@/components/BlogContent";
import BlogNavbar from "@/components/BlogNavbar";
import BlogNavbar2 from "@/components/BlogNavbar2";
import Container from "@/components/Container";
import styles from './BlogTemplate.module.css'
import { useRouter } from "next/router";
import Main from '@/components/Main'
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogPost() {
    const router = useRouter()
    let path = router.query
    const [ postData, setPostData ] = useState([])
    useEffect(() => {
        axios.get('/api/GET').then(res => {
            setPostData(res.data)
        }).catch(e => console.log(e))
    }, [])

    let hlp = []
    let hlp2 = []
    if (path && Object.keys(path).length > 0) {
        postData.some(current => current[path['topico']] ? hlp = current[path['topico']] : '')
        if (hlp.length > 0) {
            hlp.some(current => current.title.toLowerCase() === path['name'].replace(/-/g, ' ') ? hlp2 = current : '')
        }
    }
    
    return (
        <div className={ styles['blog-id-screen']}>
            <Header secondary={true} terciary={true} />
            <Main center={true}>
                <div className={ styles['blog-template']}>
                    <div>
                        <BlogNavbar terciary={true}/>
                    </div>
                    {Object.keys(hlp2).length > 0 ?
                    <>
                    <Container>
                        <BlogContent blogData={hlp2}/>
                    </Container>
                    <div>
                        <BlogNavbar2 blogTopics={hlp2.topics}/>
                    </div>
                    </>
                    : ''}
                </div>
            </Main>
        </div>
    )
}