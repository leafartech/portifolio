import { useEffect } from "react"
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

function ToggleTheme() {
    if (typeof window !== 'undefined') {
        var systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
        var pageClasses = document.documentElement.classList
    }

    useEffect(() => {
        systemPreference && pageClasses.add('dark')
    })
    const toggle = () => {
        pageClasses.toggle('dark')
    }

    return (
        <div>
            <MoonIcon className="h-8 text-indigo-900 block cursor-pointer dark:hidden" onClick={toggle} />
            <SunIcon className="h-8 text-yellow-100 hidden cursor-pointer dark:block" onClick={toggle} />
        </div>
    )
}

export default ToggleTheme