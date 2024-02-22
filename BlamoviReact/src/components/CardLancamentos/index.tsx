//estilização
import { Link } from "react-router-dom";
import "./style.css";

function CardLancamentos(props: any) {


    return (
        <Link to={`/filmesInformacoes/${CardLancamentos + props.id}`} className="link">  
            <div className="card " id="teste4" >
                <h2>{props.titulo}</h2>
                <img src={"http://localhost:8090/images/" + props.poster}/>
                <h3>{props.titulo}</h3>
                <Link to={props.trailer}>Assistir ao Trailer</Link>
            </div>
        </Link> 
    )
}

export default CardLancamentos;