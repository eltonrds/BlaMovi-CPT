//estilização
import "./style.css";

import imgIconesTrofeu from "../../assets/img/elementos/Trophy.png";
import imgIconesComentario from "../../assets/img/elementos/Talk.png";
import { Link } from "react-router-dom";


function Card(props: any) {

    // function verificarComentarios() {
    //     if (typeof props.comentarios === "string") {
    //         return JSON.parse(props.comentarios);
    //     } else {
    //         return props.comentarios;
    //     }
    // }

    return (
        <Link to={`/filmesInformacoes/${props.id}`} className="link">
            <div className="card responsivo" id="teste3" >
                <img src={"http://localhost:8090/images/" + props.poster}/>
                <h3>{props.titulo}</h3>
                <div className="itens">
                    <div className="streams">
                        <img src={props.imgStream} alt="" />
                    </div>
                    <div className="icones">
                        <img src={imgIconesTrofeu} alt="" />
                        <span>{parseFloat(props.nota).toFixed(1)}</span>
                        <img src={imgIconesComentario} alt="" />
                        <p>{props.coment}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;