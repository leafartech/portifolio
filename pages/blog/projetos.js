import Footer from "../../src/components/Footer";
import Header from "../../src/components/Header";
import Main from "../../src/components/Main";
import ProjetosData from "../../src/components/Projetos";
import Template from "../../src/components/Template";
import Text from "../../src/components/Text";

export default function Projetos() {
    return (
        <Template>
            <Header />
            <Main home={true}>
                <Text tag="h2">Projetos</Text>
                <ProjetosData />
            </Main>
            <Footer />
        </Template>
    )
}