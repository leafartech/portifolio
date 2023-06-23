import Link from "next/link"

interface CardProps {
    imagePath: string,
    title: string,
    description: string,
    href: string
}

function Card({ description, href, imagePath, title }: CardProps) {
    return (
        <div className=" w-full sm:w-80 shadow-sm rounded-xl border-2 dark:border-none dark:bg-gray-800">
            <img src={`./images/projects/${imagePath}.png`} className="rounded-t-lg w-full" alt={title} />
            <div className="relative px-4 pb-4 w-full flex flex-col gap-2 -mt-4">
                <div className="absolute w-full h-28 bottom- left-0 -top-24 bg-gradient-to-t from-white to-transparent dark:from-gray-800 dark:to-transparent"></div>
                <h2 className="z-50 text-2xl text-indigo-600 font-semibold dark:text-blue-500">{title}</h2>
                <p className="text-gray-600">{description}</p>
                <Link href={href} className="text-center bg-indigo-600 dark:bg-blue-600 text-gray-100 flex-1 p-2 rounded-lg font-semibold">Detalhes</Link>
            </div>
        </div>
    )
}

export default Card