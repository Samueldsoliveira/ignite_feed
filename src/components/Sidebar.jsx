import { PenLine } from 'lucide-react'
import { Avatar } from './Avatar'

export function Sidebar() {
    return(
        <aside className="bg-gray-800 rounded-lg truncate center">
            <Avatar src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />

            <div className="flex flex-col items-center -mt-8">
                <img 
                className="box-content w-12 h-12 rounded-lg border-gray-800 border-4 outline outline-green-800"
                src="https://github.com/samueldsoliveira.png" 
                alt="" 
                />

                <strong className="mt-4 text-gray-100 leading-6">Samuel Oliveira</strong>
                <span className="text-sm text-gray-400 leading-6">Web Developer</span>
            </div>

            <footer className="border-t-2 border-gray-700 mt-6 pt-6 px-8 pb-8">
                <a 
                href="#" 
                className="bg-transparent text-green-700 border-2 border-opacity-100 border-green-800 rounded-lg h-12 px-6 font-bold block flex items-center justify-center transform motion-safe:hover:scale-110 hover:bg-green-500 hover:text-white transition duration-300 gap-2">
                    <PenLine width={18} className='text-green-700 hover:text-white'/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}