'use client'

import { ChevronDownIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline'
import { ReactNode, useState } from 'react'
import HeroFlex from '../ComponentsTemplates/HeroFlex'
import CopyButton from '../CopyButton'

interface DropdownProps {
    children: ReactNode
    title: string
    code: string
}

export default function Dropdown({ children, title, code }: DropdownProps) {
    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <div>
            <h2 className="relative text-zinc-600 borader-b border-zinc-400 flex items-center gap-2 pb-2">
                <div className="cursor-pointer flex items-center gap-2" onClick={() => setIsActive(!isActive)}>
                    <span className="">{title}</span>
                    <ChevronDownIcon className={`w-4 h-4 ${isActive ? 'rotate-0' : '-rotate-90'}`} />
                </div>
                <div className="absolute left-44">
                    <CopyButton
                        code={code}
                    />
                </div>
            </h2>
            <div className={`border border-zinc-300 p-12 ${isActive ? 'grid grid-cols-3' : 'hidden'}`}>
                {children}
            </div>
        </div>

    )
}