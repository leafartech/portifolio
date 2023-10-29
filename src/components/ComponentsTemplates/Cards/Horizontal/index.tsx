import { ElementType } from "react"

interface HorizontalCardProps {
    title: string
    subtitle: string
    Icon: ElementType
}

export default function HorizontalCard({ Icon, subtitle, title }: HorizontalCardProps) {
    return (
        <div className="w-full max-w-sm flex sm:flex-col gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                <Icon className="h-5 w-5 text-blue-500" />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-zinc-600 text-sm">{subtitle}</p>
            </div>
        </div>
    )
}