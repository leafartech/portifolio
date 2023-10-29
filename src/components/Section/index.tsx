import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode
    id?: string
    className?: string
}

export default function Section({ children, className, id }: SectionProps) {
    return (
        <section className={`w-full flex items-center justify-center ${className}`} id={id}>
            <div className="w-full max-w-7xl flex items-center justify-center flex-col">
                {children}
            </div>
        </section>
    )
}