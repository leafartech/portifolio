import { ReactChild, ReactElement } from "react"

interface MainProps {
    children: ReactElement
}

function Main({children}: MainProps) {
    return (
        <main className="px-4 sm:px-8">
            {children}
        </main>
    )
}

export default Main