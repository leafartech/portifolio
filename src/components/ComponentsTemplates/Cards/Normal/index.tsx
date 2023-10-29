import { ElementType } from "react"

interface NormalCardProps {
    Icon: ElementType
    title: string
    subtitle: string
}

export default function NormalCard({ Icon, subtitle, title }: NormalCardProps) {
    return (
        <div className="w-full max-w-[300px] flex flex-col py-10 px-4 bg-white rounded-xl shadow-xl">
            <Icon className="h-8 w-8" />
            <h3 className="text-2xl mt-3 mb-1 font-bold">{title}</h3>
            <p className="text-zinc-600 text-sm">{subtitle}</p>
        </div>
    )
}