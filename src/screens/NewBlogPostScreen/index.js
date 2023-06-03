import { useRouter } from 'next/router'
import styles from './NewBlogPostScreen.module.css'
import Text from '../../components/Text'
import Widget from '../../components/Widget'
import { useContext, useEffect, useState } from 'react'
import BlogPost from '../../components/BlogPost'
import { sessionContext } from '../../../context/Session'
import axios from 'axios'

export default function NewBlogPostScreen() {
    const session = useContext(sessionContext)
    const [ userData, setUserData ] = useState({})

    useEffect(() => {
        setUserData(JSON.parse(session.getUser()))
    }, [])

    const router = useRouter()
    const [ title, setTitle ] = useState('TÍTULO DO POST')
    const [ desc, setDesc] = useState('Sugestão: sintetize o assunto principal do post para orientar o visitante.')
    const [ subject, setSubject] = useState('Assunto')
    const [ topicTitles, setTopicTitles ] = useState(['Título do tópico'])
    const [ topicContent, setTopicContent ] = useState(['Escreva aqui nesta seção o conteúdo do tópico. Se precisar de outro tópico, clique no botão abaixo e altere alguma letra do último tópico'])
    const [ quantity, setQuantity ] = useState([' '])
    const [ form, setForm ] = useState({})

    const [ success, setSuccess ] = useState(false)
    const [ error, setError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')


    function inptChange(e, index) {
        const { name, value } = e.target

        if (name === 'topicTitle') {
            let hlp = topicTitles

            hlp[index] = value

            setForm((prevState) => ({
                ...prevState,
                [name]: hlp
            }))
        } else if (name === 'topicContent') {
            let hlp = topicContent

            hlp[index] = value

            setTopicContent(hlp)

            setForm((prevState) => ({
                ...prevState,
                [name]: hlp
            }))
        } else {
            if (name === 'title') setTitle(value)
            if (name === 'desc') setDesc(value)
            if (name === 'subject') setSubject(value)

            setForm((prevState) => ({
                ...prevState,
                [name]: value
            }))
        }
    } 

    function newTopic() {
        let titleHlp = topicTitles
        let contentHlp = topicContent
        let quantityHlp = quantity

        titleHlp.push('Título do tópico')
        contentHlp.push('Escreva aqui nesta seção o conteúdo do tópico. Se precisar de outro tópico, clique no botão abaixo e altere alguma letra do último tópico')
        quantityHlp.push(' ')
        setTopicTitles(titleHlp)
        setTopicContent(contentHlp)
        setQuantity(quantityHlp)
    }

    async function formSubmited(e) {
        e.preventDefault()

        setError({})
        setErrorMessage(false)
        setSuccess(false)
        if (title === '') return setError({title: true})
        if (desc === '') return setError({desc: true})

        const data = {...form, name: userData.name}

        await axios.post('/api/blog', data).then(res => {
            if (res.data.error) return setErrorMessage(res.data.error)

            console.log(res.data)
        }).catch(e => console.log(e))
    }

    return (
        <div className={ styles['newblogpost-screen']}>
            <a onClick={e => router.back()} className={ styles.back }>
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M19,11H9l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-4.29,4.3A2,2,0,0,0,6,12H6a2,2,0,0,0,.59,1.4l4.29,4.3a1,1,0,1,0,1.41-1.42L9,13H19a1,1,0,0,0,0-2Z"/></svg>
                voltar
            </a>
            <form className={ styles.form } onSubmit={e => formSubmited(e)}>
                <div className={ styles.toCenter}>
                    <Text top="blog" bottom="Mais simples impossível!">Novo Post</Text>
                    <Widget type="text" title="Instruções:">
                        <p>- Para a criação de um novo post, você precisa apenas selecionar e alterar os campos abaixo;</p>
                        <p>- Todos campos com * devem ser preenchidos, do contrário o post não será criado;</p>
                        <p>- Para a criação de um novo tópico ser executada, você precisa clicar no botão "Adicionar tópico" e, depois, alterar algum texto de outro tópico.</p>
                    </Widget>
                    <div className={ styles.inpts }>
                        <div className={ styles.notFirst }>
                            <input className={ styles.subject } type="text" name="subject" value={subject} onChange={e => inptChange(e)}/>
                            <input className={ styles.title } type="text" name="title" value={title} onChange={e => inptChange(e)}/>
                            <input className={ styles.paragraph } type="text" name="desc" value={desc} onChange={e => inptChange(e)}/>
                        </div>
                        <BlogPost inptChange={(e, index) => inptChange(e, index)} quantity={quantity} topicContent={topicContent} topicTitles={topicTitles}/>
                        <span className={ styles['new-topic']} onClick={e => newTopic(e)}>
                            Adicionar tópico
                            <svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z"/></svg>
                        </span>
                        <button className={ styles.btn} type='submit'>Finalizar Post</button>
                    </div>
                </div>
            </form>
        </div>
    )
}