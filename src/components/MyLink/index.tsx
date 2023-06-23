import Link from "next/link";
import { useRouter } from "next/router";
import { ReactChild } from "react";

interface MyLinkProps {
    path: string,
    children: ReactChild
}

function MyLink({ path, children }: MyLinkProps) {
    const router = useRouter()

    if (router.pathname === path) {
        return (
            <Link href={path} className="text-sm font-medium no-underline text-indigo-600 dark:text-gray-50">{children}</Link>    
        )
    }
    return (
        <Link href={path} className="text-sm font-medium no-underline text-gray-800 dark:text-gray-500 dark:hover:text-gray-50 hover:text-indigo-600">{children}</Link>
    )
}

export default MyLink