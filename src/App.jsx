import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import './global.css'
import { Post } from "../src/components/Post"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ RocketSeat'
    },
    content: [
      {type: 'paragraph', content: 'Gostaria de compartilhar que recebi uma nova certificação: React com Typescript: desenvolvendo uma área administrativa da empresa <a href="https://www.linkedin.com/school/aluracursos/">Alura</a>!'}
    ],
    publishedAt: new Date('2023-11-21 15:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/samueldsoliveira.png',
      name: 'Samuel Oliveira',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Gostaria de compartilhar que recebi uma nova certificação: React com Typescript: desenvolvendo uma área administrativa da empresa <a href="https://www.linkedin.com/school/aluracursos/">Alura</a>!'}
    ],
    publishedAt: new Date('2023-11-10 15:00:00')
  },
]

function App() {
  return (
    <div>
      <Header/>
      <div className="max-w-6xl my-8 mx-auto py-0 px-4 gap-3 items-start wrapper sm:grid-cols-1 sm:text-sm">
        <Sidebar/>
        <main>
          {posts.map(() => {
            return (
              <Post 
              key={1}
              author={posts.author}
              content={posts.content}
              publishedAt={posts.publishedAt}

            />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
