'use client'

import { ReactNode } from "react";
import Dropdown from "../Dropdown";

interface TableProps {
    dropState: boolean
    children: ReactNode
}

export default function Table({ children, dropState }: TableProps) {
    return (
        <table className={`mt-6 w-full ${dropState ? 'flex flex-col' : 'hidden'}`}>
            <thead className="flex">
                <tr className="w-full border-b border-zinc-400 pb-2">
                    <th className="text-left font-medium">Nome do componente</th>
                </tr>
            </thead>
            <tbody className="w-full flex-1 flex">
                <tr className="w-full flex">
                    <td className="pt-6 w-full">
                        <div>
                            {children}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}