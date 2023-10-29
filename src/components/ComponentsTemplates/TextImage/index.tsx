interface TextImageProps {
    imagePath?: string
    title?: string
    subtitle?: string
}

export default function TextImage({ imagePath, subtitle, title }: TextImageProps) {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col gap-2 text-center items-center">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="max-w-md text-sm text-zinc-600">{subtitle}</p>
            </div>
            <div className="flex justify-center">
                <img src={`./images/${imagePath}.png`} alt="" />
            </div>
        </div>
    )
}