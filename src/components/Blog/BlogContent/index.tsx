import { ChangeEvent } from 'react'
import styles from './BlogPost.module.css'

interface BlogContentProps {
    topicTitles: string[],
    topicContent: string[], 
    quantity: string[],
    inptChange: (e: ChangeEvent, index: string) => void
}

export default function BlogContent({topicTitles, topicContent, quantity, inptChange}: BlogContentProps) {
    return (
        <>
            {Object.keys(quantity).map((index: any) => (
                <div key={index} className="border-b border-gray-200 pb-3">
                    <input className="bg-transparent text-2xl text-gray-900 outline-1 outline-gray-100 p-4 w-full mt-6" type="text" name="topicTitle" value={topicTitles[index]} onChange={e => inptChange(e, index)}/>
                    <textarea className="bg-transparent text-lg text-gray-600 outline-1 outline-gray-100 p-4 w-full" name="topicContent" value={topicContent[index]} onChange={e => inptChange(e, index)} />
                </div>
            ))}
        </>
    )
}