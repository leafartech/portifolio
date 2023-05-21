import { useContext, useEffect, useState } from 'react'
import styles from './NovoProjeto.module.css'
import Input from '../Input'
import { sessionContext } from '../../../context/Session'
import axios from 'axios'
import Botao from '../Botao'
import Text from '../Text'
import Content from '../Content'

export default function NovoProjeto() {
    const session = useContext(sessionContext)
    const [userData, setUserData ] = useState()
    useEffect(() => {
        setUserData(JSON.parse(session.getUser()))
    }, [])

    const [ name, setName ] = useState('')
    const [ description, setDescription] = useState('')
    const [ data, setData ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ link, setLink ] = useState('')
    const [ content, setContent ] = useState({contentSub: '', contentData: ''})
    const [ content2, setContent2 ] = useState({contentSub2: '', contentData2: ''})
    const [ content3, setContent3 ] = useState({contentSub3: '', contentData3: ''})
    const [ form, setForm ] = useState({})

    function inptChange(e) {
        const { name, value} = e.target

        if (name === 'name') setName(value)
        if (name === 'description') setDescription(value)
        if (name === 'data') setData(value)
        if (name === 'subject') setSubject(value)
        if (name === 'link') setLink(value)
        if (name === 'contentSub1') setContent((prevState) => ({...prevState, contentSub: value}))
        if (name === 'contentData1') setContent((prevState) => ({...prevState, contentData: value}))
        if (name === 'contentSub2') setContent2((prevState) => ({...prevState, contentSub: value}))
        if (name === 'contentData2') setContent2((prevState) => ({...prevState, contentData: value}))
        if (name === 'contentSub3') setContent3((prevState) => ({...prevState, contentSub: value}))
        if (name === 'contentData3') setContent3((prevState) => ({...prevState, contentData: value}))

        setForm((prevState) => ({
            ...prevState,
            [name]: value
        }))

    }

    async function formSubmited(e) {
        e.preventDefault()

        await axios.post('/api/crud/POST', form).then((res) => {
            console.log(res)
        }).catch(e => console.log(e))
    }
    return (
        <form className={ styles.forms } onSubmit={e => formSubmited(e)}>
            <div className={ 'flex' }>
                <Input inptChange={e => inptChange(e)} type="text" placeholder="Digite aqui..." name="name" label="Nome do projeto" value={name}  />
                <Input inptChange={e => inptChange(e)} type="text" placeholder="Digite aqui..." name="description" label="Descrição" value={description}/>
            </div>
            <div className={ 'flex' }>
                <Input inptChange={e => inptChange(e)} type="date" placeholder="21/05/2023" name="data" label="Data" value={data}/>
                <Input inptChange={e => inptChange(e)} type="text" placeholder="Assunto do projeto" name="subject" label="Assunto" value={subject}/>
            </div>
            <Input inptChange={e => inptChange(e)} type="text" placeholder="Link do projeto" name="link" label="Assunto" value={link}/>
            <div className={ styles.content }>
                <Text top={true} tag="h3">Conteúdo 1</Text>
                    <>
                    <div>
                        <Input inptChange={e => inptChange(e)} type="text" placeholder="Mais informações" name="contentSub1" label="Subtítulo" value={content.subtitle} />
                    </div>
                    <div>
                        <Input inptChange={e => inptChange(e)} type="textarea" placeholder="Mais informações" name="contentData1" label="Conteúdo" value={content.subtitle} />
                    </div>
                    </>
            </div>
            <div className={ styles.content }>
                <Text top={true} tag="h3">Conteúdo 2</Text>
                    <>
                    <div>
                        <Input inptChange={e => inptChange(e)} type="text" placeholder="Mais informações" name="contentSub2" label="Subtítulo" value={content2.subtitle} />
                    </div>
                    <div>
                        <Input inptChange={e => inptChange(e)} type="textarea" placeholder="Mais informações" name="contentData2" label="Conteúdo" value={content2.subtitle} />
                    </div>
                    </>
            </div>
            <div className={ styles.content }>
                <Text top={true} tag="h3">Conteúdo 3</Text>
                    <>
                    <div>
                        <Input inptChange={e => inptChange(e)} type="text" placeholder="Mais informações" name="contentSub3" label="Subtítulo" value={content3.subtitle} />
                    </div>
                    <div>
                        <Input inptChange={e => inptChange(e)} type="textarea" placeholder="Mais informações" name="contentData3" label="Conteúdo" value={content3.subtitle} />
                    </div>
                    </>
            </div>
            <span className={ styles.botao } onClick={e => newContent(e) }>
                <svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z"/></svg>
                adicionar novo conteúdo
            </span>
            
            <Botao text="Salvar" type="submit"/>
        </form>
    )
}
