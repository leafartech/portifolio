import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Template from "../src/components/Template";
import Text from "../src/components/Text";
import BlogList from "../src/components/ListLinks";

export default function Blog() {
    const blogList = [
        {path: '/projetos', text: 'Projetos'}
    ]

    return (
        <Template>
            <Header />
            <Main home={true}>
                <Text tag="h2">Blog</Text>
                <BlogList list={blogList} />
            </Main>
            <Footer />
        </Template>
    )
}