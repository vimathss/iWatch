import VideoCard from './VideoCard'
import { useEffect, useState } from 'react'
import estilos from "./VideosLista.module.css"

function VideoLista({ searchQuery }) {
    const [videosAPI, setVideosAPI] = useState([]) // Retorno da API
    const [erro, setErro] = useState('') // Mensagem de Erro

    const chaveYT = 'AIzaSyBYiea4fj-g-km7XO4tidF6jAWmjDgu1PM'
    const buscaPadrao = '' // Busca padrão ao entrar na page

    const buscaVideos = async (termoBusca) => {
  
        try {
            const respostaJSON = await fetch(
                `https://www.googleapis.com/youtube/v3/search?key=${chaveYT}&q=${termoBusca}&part=snippet&order=viewCount&videoDuration=medium&type=video&maxResults=20` // Busca pelos videos e suas informações
            )
            const respostaJS = await respostaJSON.json()

            if (respostaJS.items) {
                setVideosAPI(respostaJS.items)
                console.log(respostaJS)
                
            } else {
                setErro("Nenhum vídeo encontrado.")
            }
        } catch (erro) {
            setErro(`A busca por vídeos falhou! (Erro: ${erro.message})`)
        }

     
    }

    useEffect(() => {
        const termoBusca = searchQuery || buscaPadrao 
        buscaVideos(termoBusca)
    }, [searchQuery])

    return (
        <main className={estilos.videosConteiner}>
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
            {videosAPI.map(cadaVideo => (
                <VideoCard key={cadaVideo.id.videoId} propsVideo={cadaVideo} />
            ))}
        </main>
    )
}

export default VideoLista
