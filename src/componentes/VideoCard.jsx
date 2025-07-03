import estilos from "./VideoCard.module.css"
function VideoCard({propsVideo}){
    const dataFormatada = new Date(propsVideo.snippet.publishedAt).toLocaleDateString("pt-BR") // função para reestruturar a data para o formato convencional
    
    return(
        <figure className={estilos.card} onClick={() => window.open(`https://www.youtube.com/watch?v=${propsVideo.id.videoId}`, '_blank')}> {/* DIV principal com a função OnClick p/ abrir o video no youtube */}
            <img className={estilos.thumbnail} src={`https://i.ytimg.com/vi/${propsVideo.id.videoId}/hqdefault.jpg`} />
                <figcaption className={estilos.titulo}>{propsVideo.snippet.title}</figcaption>
                <div className="canalDesc">
                  <figcaption className={estilos.canal}>{propsVideo.snippet.channelTitle}  •  {dataFormatada}</figcaption>
                </div>         
        </figure>
    )
}
export default VideoCard