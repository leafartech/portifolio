import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import NovoProjeto from "../src/components/NovoProjeto";
import Template from "../src/components/Template";
import Text from "../src/components/Text";

export default function novoProjeto() {

    return (
        <Template>
            <Header />
            <Main home={true}>
                <Text tag="h2">Novo Projeto</Text>
                <NovoProjeto />
            </Main>
            <Footer />
        </Template>
    )
}