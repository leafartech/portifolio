import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import BlogContent from "../../../components/Blog/BlogContent";
import axios from "axios";

function BlogPostScreen() {
    const [ user, setUser] = useState({})
    useEffect(() => {
        setUser(JSON.stringify(localStorage.getItem('portfolio')) || {name:''})
    }, [])
    const [ mainTitle, setMainTitle ] = useState('Título da publicação')
    const [ mainDescription, setMainDescription ] = useState('Descrição da publicação')
    const [ topicTitles, setTopicTitles ] = useState(['Título do tópico'])
    const [ topicContent, setTopicContent ] = useState(['Escreva aqui nesta seção o conteúdo do tópico. Se precisar de outro tópico, clique no botão abaixo e altere alguma letra do último tópico'])
    const [ subject, setSubject ] = useState('Assunto')
    const [ quantity, setQuantity ] = useState([' '])
    const [ form, setForm ] = useState({})

    const [ success, setSuccess ] = useState(false)
    const [ errorMessage, setErrorMessage] = useState('')

    function inptChange(e: ChangeEvent<HTMLInputElement>, index: number) {
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
            console.log(name, value)
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

    async function formSubmited(e: FormEvent) {
        e.preventDefault()

        setSuccess(false)

        const data = {...form, subject, mainTitle, mainDescription, name: 'RAFAEL BORGES BEZERRA'}

        await axios.post('/api/blog', data).then(res => {
            if (res.data.error) return setErrorMessage(res.data.error)
            setSuccess(true)
        }).catch(e => console.log(e))
    }

    if (Object.keys(user).length > 0) {
        return (
            <div className="min-h-screen max-h-full">
                <Navbar />
                <div className="mt-6 pt-12 max-w-my flex flex-col justify-center items-center gap-12">
                    <div className="flex flex-col items-center text-center gap-2">
                        <h4 className="top-title">Blog</h4>
                        <h1 className="main-title">Novo post</h1>
                        <h4 className="uppercase text-gray-500 sm:text-sm lg:text-sm font-normal text-lg dark:text-gray-400">mais simples impossível! siga as orientações 👇</h4>
                    </div>
                    <div className="w-80 sm:w-96 p-8 border border-dashed border-gray-300 rounded-lg">
                        <p className="font-semibold text-sm text-gray-600">- Para a criação de um novo post, você precisa apenas selecionar e alterar os campos abaixo;</p>
                    </div>
                    <form className="w-80 sm:w-10/12 p-8 border border-dashed border-gray-300 rounded-lg" onSubmit={ e => formSubmited(e)}>
                        {errorMessage.length > 0 && <p className="text-red-500 font-semibold text-lg px-4">{errorMessage}</p>}
                        {success && <p className="text-green-500 font-semibold text-lg px-4">Publicação criada com sucesso</p>}
                        <div  className="border-b border-gray-200 pb-3">
                            <input type="text" className="bg-transparent text-xl text-gray-900 outline-1 outline-gray-100 p-4 w-full" name="subject" value={subject} onChange={e => setSubject(e.target.value)} />
                            <input className="bg-transparent text-4xl text-gray-900 outline-1 outline-gray-100 p-4 w-full" type="text" name="title" value={mainTitle} onChange={e => setMainTitle(e.target.value)}/>
                            <input className="bg-transparent text-lg text-gray-600 outline-1 outline-gray-100 py-2 px-4 w-full" type="text" name="main-description" value={mainDescription} onChange={e => setMainDescription(e.target.value)} />
                        </div>
                        {/* <div className="relative" key={0}>
                        <BlogContent inptChange={(e, index) => inptChange(e, 0)} quantity={quantity} topicContent={topicContent} topicTitles={topicTitles}/>
                            <span className="absolute right-0 bottom-10 flex items-center gap-1 underline text-blue-600 cursor-pointer" onClick={newTopic}>
                                Adicionar tópico
                                <svg className="h-4 w-4 fill-blue-600" id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z"/></svg>
                            </span>
                            <button className="bg-blue-600 text-center text-gray-100 font-semibold px-3 py-2 rounded mt-6" type='submit'>Finalizar Post</button>
                        </div> */}
                    </form>
                </div>  
            </div>
        )
    }
    return <div>Sem acesso</div>
}

export default BlogPostScreen