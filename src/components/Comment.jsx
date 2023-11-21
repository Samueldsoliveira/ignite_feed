import { ThumbsUp, Trash2 } from "lucide-react";
import { AvatarComment } from "./Avatar";

export function Comment () {
    return (
        <div className="mt-6 flex gap-4">
            <AvatarComment src="https://github.com/diego3g.png"/>
            <div className="flex-1">
                <div className="bg-gray-700 rounded-lg p-4">
                    <header className="flex items-start justify-between">
                        <div className="flex flex-col">
                            <strong className="text-sm leading-6">Diego 3G</strong>
                            <time 
                            className="text-xs leading-6 text-gray-400"
                            title="21 de Novembro ás 14:00" 
                            dateTime="2023-11-21 14:00:00"
                            >Cerca de 1h atrás</time>
                        </div>
                        <button 
                        title="Deletar comentário"
                        className="text-gray-400 cursor-pointer rounded-sm hover:text-red-500 transition"
                        >
                            <Trash2 size={24}/>
                        </button>
                    </header>
                    <p className="mt-4 text-gray-300">Muito bom Ezequiel, parabéns!!</p>
                </div>
                <footer className="mt-4">
                    <button className="bg-transparent text-gray-400 cursor-pointer flex items-center hover:text-green-300 transition point-thumbs">
                        <ThumbsUp className="mr-2"/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}