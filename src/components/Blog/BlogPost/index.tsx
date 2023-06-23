import Link from "next/link"
import { ChevronRightIcon } from '@heroicons/react/24/solid'

function BlogPost() {
    return (
        <main className="py-8 px-6 flex flex-col col-my">
            <div className="p-4 flex items-center gap-2 border-b border-gray-300">
                <Link href="/" className="text-gray-600">Blog</Link>
                {/* <ChevronRightIcon className="fill-gray-600 h-3 w-3"/>
                <Link href="/" className="text-gray-600">Início</Link> */}
            </div>
            <div className="border-b border-gray-200 py-8">
                <h1 className="text-gray-900 text-3xl font-bold mb-2">Por que um Blog?</h1>
                <p className="text-gray-600">O objetivo deste espaço é "documentar" a minha jornada em programação, assim como alguns posts de tecnologias, observações e algumas dificuldades que passei para desenvolver algo.</p >
            </div>
            <div className="border-b border-gray-200 py-8">
                <h1 className="text-gray-900 text-3xl font-bold mb-2">O que diz cada seção?</h1>
                <div className="mb-4">
                    <h3 className="text-xl font-medium">Programação</h3>
                    <p className="text-gray-600">Nesta respectiva seção do blog, é possível encontrar facilmente.</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-medium">Tecnologias</h3>
                    <p className="text-gray-600">Seção destinada a comentários e a síntese de estudos relacionados a alguma tecnologia.</p>
                </div>
                <div className="">
                    <h3 className="text-xl font-medium">Projetos</h3>
                    <p className="text-gray-600">Aqui falo um pouco a respeito de algum projeto que fiz, como foi o processo, quais dificuldades encontrei no desenvolvimento e como as solucionei.</p>
                </div>
            </div>
        </main>
    )
}

export default BlogPost