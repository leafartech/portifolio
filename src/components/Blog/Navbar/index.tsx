import { ChevronDownIcon, DocumentTextIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useState } from 'react'

function BlogNavbar() {

    let cont = false
    function menu() {
        const dropdown = document.querySelector('#dropdown')
        const menuIcon = document.querySelector('#menuIcon')

        cont = !cont
        if (cont) {
            dropdown?.classList.remove('hidden')
            dropdown?.classList.add('flex')
            menuIcon?.classList.remove('-rotate-90')
            return
        }
        dropdown?.classList.add('hidden')
        dropdown?.classList.remove('flex')
        menuIcon?.classList.add('-rotate-90')
    }   

    return (
        <nav className="flex flex-col w-full lg:h-full">
            <div className="flex lg:hidden justify-between flex-1 cursor-pointer border-b border-gray-300 p-4" onClick={menu}>
                <span className="text-gray-600">Menu</span>
                <ChevronDownIcon id="menuIcon" className="h-6 fill-gray-600 -rotate-90"/>
            </div>
            <div className={`flex-1 flex-col lg:flex hidden h-screen p-4 border-b border-gray-300`} id="dropdown">
                <div className="flex gap-2 items-center mt-6">
                    <div className="bg-gradient-to-r from-indigo-50 to-indigo-200 p-1 rounded h-10 w-10 flex items-center justify-center">
                        <DocumentTextIcon className="h-6 w-8 fill-blue-800" />
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-lg">Blog</h4>
                        <h6 className="text-xs -mt-1 text-gray-600">Confira alguns registros 👇</h6>
                    </div>
                </div>
                <ul className="mt-4">
                    <li className="text-gray-900 mb-2">Programação</li>
                    <li><Link href="/" className="text-gray-600">Minha Jornada</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default BlogNavbar