import '../global.css'
import { AvatarFeed } from './Avatar'
import { Comment } from './Comment'

export function Post () {
    return (
        <article className="bg-gray-800 rounded-lg p-10 post-margin">
            <header className=''>
                <div className="flex items-center gap-4">
                    <AvatarFeed src="https://github.com/ezequielbrilhantedev.png"/>
                    <div className="flex flex-col">
                        <strong className='text-gray-100 leading-6'>Ezequiel Brilhante</strong>
                        <span className='text-sm text-gray-400 leading-6'>Web developer</span>
                    </div>
                </div>
                <time 
                title="21 de novembro de 2023" 
                dateTime="2023-10-21 10:00:00"
                className='sm:hidden'
                >Publicado há 1h</time>
            </header>
            <div className="">
                <p className='mt-4'>
                    Gostaria de compartilhar que recebi uma nova certificação: React com Typescript: desenvolvendo uma área administrativa da empresa <a href="https://www.linkedin.com/school/aluracursos/">Alura</a>!
                </p>
                <p>
                    <a href='#'>#typescript</a>{' '}
                    <a href='#'>#react</a>{' '}
                    <a href='#'>#certificacao</a>
                </p>
            </div>
            <form className='w-full mt-6 pt-6 rounded-t-sm border-gray-600 comment-effect'>
                <strong className='leading-6 text-gray-100'>Deixe seu Feedback</strong>
                <textarea 
                placeholder='Deixe um Comentário' 
                className='w-full bg-gray-700 border-none resize-none h-24 p-4 rounded-lg text-gray-100 leading-6 mt-4 outline-none'>
                </textarea>
                <footer>
                    <button 
                    className='py-4 px-6 mt-4 rounded-lg border-none bg-green-500 opacity-90 text-white font-bold cursor-pointer hover:bg-green-400 duration-100 transition'>
                        Publicar
                    </button>
                </footer>
            </form>
            <div className='mt-8'>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>

        
    )
}