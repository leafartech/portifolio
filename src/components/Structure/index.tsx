'use client'

import { ReactNode, useState } from "react"
import Section from "../Section"
import { ChevronDownIcon, Square3Stack3DIcon } from "@heroicons/react/24/outline"
import Table from "../Table"

interface StructureProps {
    children: ReactNode
    area: string
}

export default function Structure({ area, children }: StructureProps) {
    const [ dropState, setDropState ] = useState<boolean>(false)

    return (
        <Section>
            <div className="w-full h-[1px] bg-zinc-300 my-12"></div>
            <h1 className="text-xl font-semibold flex items-center gap-2 cursor-pointer" onClick={() => setDropState(!dropState)}>
                <Square3Stack3DIcon className="w-4 h-4" />
                <span>{area}</span>
                <ChevronDownIcon className={`w-4 h-4 ${dropState ? 'rotate-0' : '-rotate-90'}`} />
            </h1>
            <Table dropState={dropState}>
                {children}
            </Table>

        </Section>
    )
}