'use client'

import { ClipboardDocumentIcon } from "@heroicons/react/24/outline"
import { useState } from "react";

interface CopyButtonProps {
    code: string
}

export default function CopyButton({ code }: CopyButtonProps) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        // Copie o código para a área de transferência
        navigator.clipboard.writeText(code).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset isCopied após 2 segundos
        });
    };

    return (
        <button className="relative" onClick={handleCopyClick}>
            <ClipboardDocumentIcon className="h-4 w-4 text-blue-400" />
            {isCopied && <span className="absolute -top-4 text-sm w-[160px] font-medium text-blue-400">Componente copiado!</span>}
        </button>
    )
}