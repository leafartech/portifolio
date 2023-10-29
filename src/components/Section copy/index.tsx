import { ReactNode } from 'react'

interface SectionProps {
    children: ReactNode
    className?: string
    classNameSection?: string
}

export default function Section({ children, className, classNameSection }: SectionProps) {
    return (
        <section className={`w-full flex justify-center ${classNameSection}`}>
            <div className={`w-full max-w-7xl ${className}`}>
                {children}
            </div>
        </section>
    )
}