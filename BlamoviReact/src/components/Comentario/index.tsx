import "./style.css"

import imgBuzz from "../../assets/images/buzzlightyear.svg"
import { useEffect } from "react";

function Comentarios(props: any) {
    // function tempo(props: any) {
    //     const time = new Date();
    //     const hour = time.getHours();
    //     const minutes = time.getMinutes();
    // }

    // useEffect(()=> {
    //     calcularTempo()
    // },[])

    // monitora quando o componente estiver carregado

    return (
        <>
            <div id="comentarios" className="infoUserComments">
                <div className="imgUserComments">
                    <img src={props.img} alt="" />
                </div>
                <div className="nameAndHour">
                    <strong>{props.nome}</strong>
                    <p>{props.data}</p>
                </div>
                <p className="textoComments">{props.comentario}</p>
            </div>
        </>
    )
}

export default Comentarios