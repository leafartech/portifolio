import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline'

interface CardProps {
    imagePath: string
    type: string
    description: string
    className?: string
}

export default function Card({ imagePath, type, description, className }: CardProps) {
    return (
        <div className={`rounded-md max-w-[300px] border-b border-gray-400 pb-4 bg-gray-50 shadow-lg ${className}`}>
            <img src={`./images/cards/${imagePath}.png`} alt="" className="rounded-t-md w-full object-contain" />
            <div className="pt-3 text-center">
                <h4 className="text-gray-600 font-medium">{description}</h4>
            </div>
        </div>
    )
}