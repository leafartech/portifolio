import { ReactChild, ReactChildren, ReactElement } from "react"

interface TemplateProps {
    children: ReactElement
}

function Template({children}: TemplateProps) {
    return (
        <div className="flex items-center justify-center mt-6 pt-12">
            <div className="flex flex-col lg:grid lg:grid-cols-template max-w-my min-h-screen">
                {children}
            </div>

        </div>
    )
}

export default Template