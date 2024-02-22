import "./style.css"

// IMPORT DAS IMAGENS
import imgMadrigalPerfil from "../../assets/images/madrigalperfil.svg"
import imgToyStoryPost from "../../assets/images/balanoalvo.svg"
import imgLike from "../../assets/images/like.svg"
import imgComentar from "../../assets/images/comentar.svg"
import imgRecomendar from "../../assets/images/recomendar.svg"
import imgBuzz from "../../assets/images/buzzlightyear.svg"
import Comentario from "../Comentario"
import { useEffect } from "react"


function Post(props: any) {

    function verificaTamanhoLista() {
        if (props.comentarios.length > 0) {
            props.comentarios.map((cadaComentario: any) => {
                return <li key={cadaComentario.id} className="comentarios">
                    <Comentario
                        img={cadaComentario.foto}
                        nome={cadaComentario.nome}
                        data={cadaComentario.data}
                        comentario={cadaComentario.comentario}
                    />
                </li>
            })
        }
        return'';
    }

    return (
        <>
            <ul id="posts">
                <li className="post">
                    <div className="post">
                        <div className="infoUserPost">
                            <div className="imgUserPost">
                                <img src={props.foto} alt="" />
                            </div>
                            <div className="nameAndHour">
                                <strong>{props.nome}</strong>
                                <p>{props.data}</p>
                                <p className="colorir_texto_filmes">{props.filme}</p>
                            </div>
                        </div>
                    </div>
                    <p className="textoPost">{props.conteudoPost}</p>

                    <img className="balanoalvo" src={props.img} alt="" />
                    <div className="actionBtnPost">
                        <button type="button" className="filesPost">
                            <img src={imgLike} alt="Curtir" />
                            <span>Curtir</span>
                        </button>
                        <button type="button" className="filesPost">
                            <img src={imgComentar} alt="Comentar" />
                            <span>Comentar</span>
                        </button>
                        <button type="button" className="filesPost">
                            <img src={imgRecomendar} alt="Recomendar" />
                            <span>Recomendar</span>
                        </button>
                    </div>
                    <ul>
                        {
                            verificaTamanhoLista()
                        }
                    </ul>
                </li>
            </ul>

        </>
    )
}

export default Post