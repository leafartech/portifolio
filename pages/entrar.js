import Header from "../src/components/Header";
import Template from "../src/components/Template";
import Text from "../src/components/Text";
import Footer from "../src/components/Footer";
import Main from "../src/components/Main";
import Input from "../src/components/Input";
import { useContext, useState } from "react";
import axios from "axios";
import Botao from "../src/components/Botao";
import { sessionContext } from "../context/Session";

export default function Entrar() {
    const session = useContext(sessionContext)
    const [ one, setOne ] = useState('')
    const [ two, setTwo ] = useState('')
    const [ form, setForm ] = useState({})
    const [ error, setError ] = useState(false)
    const [ success, setSuccess ] = useState(false)

    function inptChange(e) {
        const { name, value } = e.target

        if (name === 'one') setOne(value)
        if (name === 'two') setTwo(value)

        setForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    async function formSubmited(e) {
        e.preventDefault()

        await axios.post('api/user/login', form).then(res => {
            if (res.data.error === true) return setError(true)

            session.setUser(res.data)
            setSuccess(true)
        }).catch(e => console.log(e))
    }

    return (
        <Template>
        <Header />
        <Main home={true}>
            <Text tag="h2">Entrar</Text>
            <form onSubmit={e => formSubmited(e)}>
                {error ?
                <p style={{color: '#ff0000', marginBottom: '24px', fontWeight: '600'}}>Os dados que você enviou estão incorretos.</p>
                : ''}
                {success ?
                <p style={{color: '#00ff00', marginBottom: '24px', fontWeight: '600'}}>Adm habilitado.</p>
                : ''}
                <Input label="Primeiro campo de verificação." name={"one"} inptChange={e => inptChange(e)} type={"text"} value={one} />
                <Input label="Segundo campo de verificação." name={"two"} inptChange={e => inptChange(e)} type={"text"} value={two} />
                <Botao text="Enviar" type="submit"/>
            </form>
        </Main> 
        <Footer />
    </Template>
    )
}
