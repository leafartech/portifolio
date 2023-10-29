import { ElementType } from "react"

interface NormalCardProps {
    Icon: ElementType
    title: string
    subtitle: string
}

export default function CenteredCard({ Icon, subtitle, title }: NormalCardProps) {
    return (
        <div className="w-full sm:max-w-[270px] flex flex-col items-start sm:items-center sm:text-center py-10 px-4">
            <Icon className="h-8 w-8" />
            <h3 className="text-2xl mt-3 mb-1 font-bold">{title}</h3>
            <p className="text-zinc-600 sm:text-sm">{subtitle}</p>
        </div>
    )
}