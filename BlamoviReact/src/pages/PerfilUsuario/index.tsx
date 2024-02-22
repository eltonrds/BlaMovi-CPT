import "./style.css";



//imagens
import imgHome from "../../assets/images/Home.svg";
import imgHeart from "../../assets/images/Heart.svg";
import imgUser from "../../assets/images/User.svg";
import imgreileaop from "../../assets/images/reileaop.jpg";
import imgfotopeerfil from "../../assets/images/fotopeerfil.svg";
import imgverificado from "../../assets/images/verificado.svg";
import imglevel from "../../assets/images/level.svg";
import imgGrey from "../../assets/images/Grey.svg";
import imgiconmap from "../../assets/images/iconmap.svg";
import imgpais from "../../assets/images/pais.svg";
// import imgCalendar from "../../assets/images/Calendar.svg";
import imgmufasaperfil from "../../assets/images/mufasaperfil.svg";
import imgiconpe from "../../assets/images/iconpe.svg";
import imgiconLocal from "../../assets/images/iconLocal.svg";
import imgiconAnexo from "../../assets/images/iconAnexo.svg";
import imgiconSend from "../../assets/images/iconSend.svg";
import imgff666 from "../../assets/images/ff666.svg";
import imglike from "../../assets/images/like.svg";
import imgcomentar from "../../assets/images/comentar.svg";
import imgrecomendar from "../../assets/images/recomendar.svg";
import imgvampires from "../../assets/images/vampires.svg";
import imgcarregandofeed from "../../assets/images/carregandofeed.svg";



//rotas
import { Link } from "react-router-dom";



function PerfilUsuario() {
  return (
    <>
      {/* Perfil do usuario  */}
      <main id="main_perfilusuario">
        {/* sessao 1  */}
        <section>
          <div className="estrutura">
            <img className="imagem1" src={imgreileaop} alt="perfilcapa" />
            <div className="posicionamento_perfil">
              <img
                className="entre_imagens"
                src={imgfotopeerfil}
                alt="fotopeerfil"
              />
              <div>
                <span>@Mufasa</span>
              </div>
              <img className="tam" src={imgverificado} alt="" />
              <img className="tam" src={imglevel} alt="" />
              <img className="tam" src={imgGrey} alt="" />
              {/* <div className="botao_do_perfil">
                <button className="botao"> Editar perfil</button>
              </div> */}
            </div>
            <div className="text">
              <p>
                Amo meu filho, esposa e também de assistir filmes. Ator em Rei Leão
                (Disney).
              </p>
            </div>
            <div className="icons">
              <img src={imgiconmap} alt="map" />
              <span className="spancolor">Parque Nacional do Serengeti - TZ </span>
              <img src={imgpais} alt="pais" />
              {/* <img src={imgCalendar} alt="Calendar" /> */}
              <span className="spancolor">Entrou em 2023</span>
            </div>
          </div>
        </section>
        {/* sessao 2  */}
        <div className="classificacao">
          <div className="filmes">
            <span className="comlinha">Séries assistidas</span>
            <span className="tam2">4k</span>
          </div>
          <div className="series">
            <span className="comlinha">filmes assistidos </span>
            <span className="tam2">330</span>
          </div>
        </div>
        {/*Formulário de envio*/}
        {/* <div className="newPost">
          <div className="infoUser">
            <img src={imgmufasaperfil} alt="" />
          </div>
          <form action="" className="formPost">
            <textarea
              name="textarea"
              placeholder="O que você assistiu recentemente?"
              defaultValue={""}
            />
            <div className="iconsUser">
              <div className="icons">
                <button className="btnFileForm">
                  <img src={imgiconpe} alt="Adicione uma imagem" />
                </button>
                <button className="btnFileForm">
                  <img src={imgiconLocal} alt="Adicione um local" />
                </button>
                <button className="btnFileForm">
                  <img src={imgiconAnexo} alt="Anexe um arquivo" />
                </button>
              </div>
              <button className="btnFileForm">
                <img src={imgiconSend} alt="Publicar" />
              </button>
            </div>
          </form>
        </div> */}
        {/*corpo da feed*/}
      
        <ul className="posts">
          <li className="post">
            <div className="infoUserPost">
              <div className="imgUserPost">
                <img src={imgfotopeerfil} alt="" />
              </div>
              <div className="nameAndHour">
                <strong>@mufasa</strong>
                <p>4m atrás</p>
                <p className="colorir_texto_filmes">
                  Assistiu - Terror no Estúdio 666
                </p>
              </div>
            </div>
            <p className="textoPost">
              Para quem estiver procurando diversão descompromissada, embalada por
              muito sangue e rock pesadíssimo (mais pesado que qualquer música que o
              Foo Fighters já tenha feito), Terror no Estúdio 666 é uma boa pedida.{" "}
            </p>
            <img className="balanoalvo" src={imgff666} alt="" />
            {/* <ul className="lista_comentarios">
              <li className="comentario">
                <div>
                  <span className="nome_user"></span>
                </div>
                <p className="texto_coment"></p>
              </li>
            </ul> */}
          </li>
          
          


          {/* </ul> */}
          {/* <ul className="posts"> */}
          <li className="post">
            <div className="infoUserPost">
              <div className="imgUserPost">
                <img src={imgfotopeerfil} alt="" />
              </div>
              <div className="nameAndHour">
                <strong>@mufasa &gt;</strong>
                <p>3 atrás</p>
                <p className="colorir_texto_filmes">
                  Assistiu - Hotel Transilvânia{" "}
                </p>
              </div>
            </div>
            <p className="textoPost">
              Ao repetir a fórmula do primeiro filme, Hotel Transilvânia 2 tem grandes
              chances de agradar aqueles que se divertiram com o original. Há piadas
              engraçadas, como o GPS de voz fantasmagórica, a sacaneada ao visual de
              Drácula de Bram Stoker e o acampamento para jovens vampiros (com uma
              pitada sarcástica envolvendo o cenário atual do politicamente correto),
              mas o grande trunfo continua sendo o estilo performático e exagerado de
              Drácula. Neste caso, vale também destacar o brilhantismo de Alexandre
              Moreno como a voz brasileira do personagem, trazendo um misto de pompa e
              galhofa. Diverte, apesar de ser claramente mais voltado para as crianças
              e de certos problemas de roteiro.
            </p>
            <img className="balanoalvo" src={imgvampires} alt="" />
          </li>
        </ul>
        <div className="carregamento">
          <img src={imgcarregandofeed} alt="carregamento" />
        </div>

        
      </main ></>


  )
}

export default PerfilUsuario