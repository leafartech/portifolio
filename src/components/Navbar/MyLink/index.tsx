import { ReactNode } from "react"

interface MyLinkProps {
    href: string
    children: ReactNode
    className?: string
}

export default function MyLink({ children, href, className}: MyLinkProps) {
    return (
        <li>
            <a id={"link_item"} href={href} className={`flex items-center uppercase text-xs tracking-widest ${className}`}>{children}</a>
        </li>
    )
}