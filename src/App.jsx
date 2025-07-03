import "./App.css"
import { useState } from "react"
import Header from './componentes/Header'
import VideoLista from "./componentes/VideosLista"

function App() {
  const [query, setQuery] = useState("")

  return (
    <div className="container" >
        <Header onSearch={setQuery}/>
        
        <div className="main">
          <VideoLista searchQuery={query}/>
        </div>
    </div>
  )
}

export default App
