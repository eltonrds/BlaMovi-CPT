import "./style.css"

import { Link } from "react-router-dom";


 import imgCinemaFooter from "../../assets/img/footer/cine.png"

import imgLogoBranco from "../../assets/img/logo/logo-branco.svg"

function Footer() {
    return (
        <>
              <footer id="footer">
                <img
                    className="img-footer"
                    src={imgCinemaFooter}
                    alt=""
                />
                <ul>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/Login"}>Login</Link>
                    <Link to={"/feed"}>Feed</Link>
                    <Link to={"/Calendario"}>Calendario</Link>
                    <Link to={"/Favoritos"}>Favoritos</Link>
                    {/* <Link to={"/filmesInformacoes"}>Informações</Link> */}
                </ul>
               
                <div className="copy-right">
                    <img className="img-copy" src={imgLogoBranco} alt="" />
                    <span>Blámovi</span>
                    <p>© 2023 by blamovi.com, Inc.</p>
                </div>
                
            </footer>  

        </>
    )
}

export default Footer