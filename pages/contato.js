import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Template from "../src/components/Template";
import HomeMain from "../src/components/Home";
import Text from "../src/components/Text";
import ContatoMain from "../src/components/ContatoMain";

export default function Home() {
    return (
        <Template>
            <Header />
            <Main home={true}>
                <Text tag="h2">Contato</Text>
                <ContatoMain />
            </Main>
            <Footer />
        </Template>
    )
}