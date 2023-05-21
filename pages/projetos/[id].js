import { useRouter } from "next/router";
import Footer from "../../src/components/Footer";
import Header from "../../src/components/Header";
import Main from "../../src/components/Main";
import Template from "../../src/components/Template";
import Text from "../../src/components/Text";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjetosId() {
    const router = useRouter()
    let params = router.query.id
    const [ projects, setProjects ] = useState([])
    const [ project, setProject ] = useState({})

    useEffect(() => {
        axios.get('/api/crud/GET').then(res => {
            setProjects(res.data)
        }).catch(e => console.log(e))
    }, [])

    useEffect(() => {
        if (typeof params !== 'undefined' && params.length > 0 && Object.keys(projects).length > 0) {
            setProject(projects[parseInt(params.replace(':', '')) - 1])
        }
    }, [projects])

    return (
        <Template>
            <Header />
            <Main home={true}>
                {Object.keys(project).length > 0 ?
                <>
                <Text tag="h2">{project.name}</Text>
                <p>{project.description}</p>
                <p>{project.subject}</p>
                <p>{project.data}</p>
                <p>{project.link}</p>
                <div>
                    <p>{project.body[0][0]}</p>
                    <p>{project.body[0][1]}</p>
                </div>
                <div>
                    <p>{project.body[1][0]}</p>
                    <p>{project.body[1][1]}</p>
                </div>
                <div>
                    <p>{project.body[2][0]}</p>
                    <p>{project.body[2][1]}</p>
                </div>
                </>
                
                : ''}
            </Main>
            <Footer />
        </Template>
    )
}