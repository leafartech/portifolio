import { useContext, useState } from 'react'
import Header from '../../components/Header'
import Main from '../../components/Main'
import styles from './EntrarScreen.module.css'
import Button from '../../components/Button'
import axios from 'axios'
import { sessionContext } from '../../../context/Session'
import { useRouter } from 'next/router'

export default function EntrarScreen() {
    const session = useContext(sessionContext)
    const { setUser } = session
    const router = useRouter()

    const [ user, setName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ form, setForm ] = useState({})
    const [ error, setError ] = useState({})
    const [ mainMessage, setMainMessage] = useState('')
    const [ success, setSuccess ] = useState('')

    function inptChange(e) {
        const { name, value } = e.target

        if (name === 'name') setName(value)
        if (name === 'password') setPassword(value)

        setForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    } 

    async function formSubmited(e) {
        e.preventDefault()

        setError({})
        setMainMessage('')
        setSuccess('')
        if (user === '') return setError({user: true})
        if (password === '') return setError({password: true})

        const data = form

        await axios.post('/api/login', data).then(res => {
            if (res.data.error) return setMainMessage(res.data.error)

            setSuccess('Login efetuado com sucesso!')
            setUser(res.data)
            setTimeout(() => {
                router.push('/admin')
            }, "3000")
        }).catch(e => console.log(e))
    }

    return (
        <div className={ styles['entrar-screen']}>
            <Header secondary={true}/>
            <Main>
                <form className={ styles.form } onSubmit={e => formSubmited(e)}>
                    {mainMessage.length > 0 ?
                        <p className={ styles.error}>{mainMessage}</p>
                    : ''}
                    {success.length > 0 ?
                        <p className={ styles.success}>{success}</p>
                    : ''}
                    <h4>Acessar Admin</h4>
                    <div className={ styles['form-control'] }>
                        <label>Usuário</label>
                        <input type='text' name="name" placeholder="....." value={user} onChange={e => inptChange(e)}/>
                        {error['user'] ? 
                        <p className={ styles.error }>Preencha o campo acima com algum dado válido.</p>
                        : ''}
                    </div>
                    <div className={ styles['form-control'] }>
                        <label>Chave de acesso</label>
                        <input type='password' name="password" placeholder="....." value={password} onChange={e => inptChange(e)}/>
                        {error['password'] ? 
                        <p className={ styles.error }>Preencha o campo acima com algum dado válido.</p>
                        : ''}
                    </div>
                    <Button type="submit">Entrar</Button>
                </form>
            </Main>
        </div>
    )
}