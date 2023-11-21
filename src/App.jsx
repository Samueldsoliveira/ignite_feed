import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import './global.css'
import { Post } from "../src/components/Post"

function App() {
  return (
    <div>
      <Header/>
      <div className="max-w-6xl my-8 mx-auto py-0 px-4 gap-3 items-start wrapper sm:grid-cols-1 sm:text-sm">
        <Sidebar/>
        <main>
          <Post/>
          <Post/>
        </main>
      </div>
    </div>
  )
}

export default App
