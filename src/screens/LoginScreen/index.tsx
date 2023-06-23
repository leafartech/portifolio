import { FormEvent, useState } from "react"
import Navbar from "../../components/Navbar"
import axios from 'axios'

function LoginScreen() {
    const [ user, setUser ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ message, setMessage ] = useState('')

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        axios.post('/api/admin', { user, password }).then(res => {
            if (res.data.error) return setMessage('Dados inválidos...')

            localStorage.setItem('portfolio', JSON.stringify(res.data))
        }).catch(e => console.log(e))
    }

    return (
        <div className="w-full h-screen">
            <Navbar />
            <div className="max-w-my h-full flex justify-center items-center">
                <form className="border border-blue-600 bg-white rounded-lg shadow-sm px-6 py-8 flex flex-col gap-3 w-80 sm:w-96" onSubmit={e => onSubmit(e)} method="POST">
                    {message ? <p className="text-center text-gray-600 font-semibold">{message}</p> : ''}
                    <h2 className="text-xl sm:text-3xl text-center mb-4">Acesso adm</h2>
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-600" htmlFor="user">Usuário</label>
                        <input className="p-3 rounded" type="text" id="user" placeholder="Digite aqui..." name="user" value={user} onChange={e => setUser(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-600" htmlFor="key">Chave de acesso</label>
                        <input className="p-2 rounded" type="password" id="key" placeholder="********" name="password" value={password} onChange={(e => setPassword(e.target.value))} />
                    </div>
                    <button className="bg-blue-600 text-white font-semibold py-3 rounded">Acessar</button>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen