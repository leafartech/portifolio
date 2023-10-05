'use client'
import { useRouter } from "next/navigation"
import { FormEvent } from "react"

export default function Teste() {
    const router = useRouter()

    function formSubmit(e: FormEvent) {
        e.preventDefault()
        router.push('/obrigado')
    }   

    return (
        <main className="flex items-center justify-center h-screen bg-zinc-50">
            <form className="flex flex-col items-center gap-3" onSubmit={(e) => formSubmit(e)}>
                <h2 className="text-xl font-medium mb-4">Cadastre-se:</h2>
                <div className="flex flex-col gap-1">
                    <label>Email</label>
                    <input type="email" className="border border-gray-300 outline-none px-4 py-1 rounded-md" />
                </div>
                <div className="flex flex-col gap-1">
                    <label>Telefone</label>
                    <input type="text" className="border border-gray-300 outline-none px-4 py-1 rounded-md" />
                </div>
                <button className="w-full bg-emerald-500 py-2 text-center text-white font-medium rounded-md">Enviar</button>
            </form>
        </main>
    )
}