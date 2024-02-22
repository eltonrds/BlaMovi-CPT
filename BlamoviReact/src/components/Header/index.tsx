import "./style.css"


import imgLogoBranco  from "../../assets/images/logo-branco.svg";
// import imgLogoBranco from "../../assets/img/logo/logo-branco.svg"
import { Link } from "react-router-dom";


function Header() {

    function mostrarMenu() {
        let menu: any = document.getElementById("menu_links"); // Obtém o elemento do menu pelo ID
        let sombra: any = document.getElementById("sombra"); // Obtém o elemento da sombra pelo ID
        let menu_barras: any = document.getElementById("menu_barras"); // Obtém o elemento do botão do menu pelo ID

        let body: any = document.getElementsByTagName("body")[0]; // Obtém o elemento body (primeiro elemento)

        if (window.getComputedStyle(menu).display == "none") { // Verifica se a propriedade 'left' do estilo computado do elemento do menu é diferente de 10px
            menu.style.display = "flex";
           // menu.style.left = "200px"; //Define a posição 'left' do menu como 10px movendo ele para direita
        //   menu.style.justifyContent = "end"
            sombra.style.right = "-10vw"; // Move a sombra para a direita

            menu_barras.setAttribute("aria-expanded", "true"); // Atualiza o atributo 'aria-expanded' para 'true'
            menu_barras.setAttribute("aria-label", "fechar menu"); // Atualiza o atributo 'aria-label' para 'fechar menu'
            body.style.overflow = "auto"; // Define o overflow do body como "hidden" para evitar a rolagem da página
        } else {
            menu.style.display = "none";
            //menu.style.left = "-3000px"; // Esconde o menu deslocando-o para esquerda
        
            sombra.style.right = "110vw"; // Move a sombra para a esquerda para ocultá-la
            
            menu_barras.setAttribute("aria-expanded", "false"); // Atualiza o atributo 'aria-expanded' para 'false'
            menu_barras.setAttribute("aria-label", "abrir menu"); // Atualiza o atributo 'aria-label' para 'abrir menu'
            body.style.overflow = "auto"; // Restaura o overflow do body para o valor padrão (auto)
        }
        menu_barras.classList.toggle("ativo"); // Alterna a classe 'ativo' no botão do menu
    }
    

    return (
        <><div id="sombra"></div>
            <header id="header">
                <div className="posicionamento_header posicionamento">
                    <div className="logo">
                        <img src={imgLogoBranco} alt="logo" />
                        <span>Blámovi</span>
                    </div>
                    {/* <div id="divBusca">
                        <input type="text" id="txtBusca" placeholder="..." />
                        <button id="btnBusca">Buscar</button>
                    </div> */}

                    

                    <Link
                        id="menu_barras"
                        aria-label="abrir menu"
                        aria-controls="menu_links"
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="menu_barras"
                        to={"#"}
                        onClick={mostrarMenu}>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>
                    </Link>

                    <nav id="menu_links">
                        <Link to={"/"} style={{ animationDelay: "0.2s" }}>Home</Link>
                        <Link to={"/Favoritos"}>Favoritos</Link>
                        <Link to={"/Cadastro"}>Cadastro</Link>
                        <Link to={"/Login"}>Login</Link>

                        {/* {
                            props.usuario.logado ? <span>olà, {props.usuario.nomeUsuario} 
                            </span> :
                            <Link className="header_botao_login" to="/login">login</Link>
                        } */}

                    </nav>
                </div>
            </header> 

        </>
    )
}


export default Header;