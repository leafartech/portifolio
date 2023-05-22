import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Template from "../src/components/Template";
import Text from "../src/components/Text";
import BlogList from "../src/components/ListLinks";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Blog() {
    const [ projects, setProjects ] = useState([])
    useEffect(() => {
        axios.get('/api/crud/GET').then(res => {
            setProjects(res.data)
        }).catch(e => console.log(e))
    }, [])
    console.log(projects)

    return (
        <Template>
            <Header />
            <Main home={true}>
                <Text tag="h2">Projetos</Text>
                <BlogList projects={true} list={projects} />
            </Main>
            <Footer />
        </Template>
    )
}