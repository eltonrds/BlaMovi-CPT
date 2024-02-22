import "./style.css"

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../utils/api";


// import imgSimboloBatman from "../../assets/Images/image 141.svg";
import imgCoracao from "../../assets/Images/Coracao.svg";
//import imgBatman from "../../assets/Images/batman-(cav-das-tre).webp";
import imgTrofeu from "../../assets/Images/image 144.svg";
import imgBaloesComentarios from "../../assets/Images/image 145.svg";
//import imgHbo from "../../assets/Images/image 143.svg";
//import imgNetflix from "../../assets/Images/image 76.svg";
//import imgPrimeVideo from "../../assets/Images/image 70.svg";
//import imgDisney from "../../assets/Images/image 39.svg";
import imgBonecosGrupo from "../../assets/Images/Business Group.svg";
// import imgChristian from "../../assets/Images/image 122.svg";
// import imgMaggie from "../../assets/Images/image 126.svg";
// import imgMichael from "../../assets/Images/image 125.svg";
// import imgHeath from "../../assets/Images/image 123.svg";
// import imgMorgan from "../../assets/Images/image 128.svg";
// import imgCillian from "../../assets/Images/image 132.svg";
// import imgLampada from "../../assets/Images/Light On.svg";
// import imgAvengers from "../../assets/Images/image 111.svg";
// import imgJoker from "../../assets/Images/image 110.svg";
// import imgFlash from "../../assets/Images/image 85.svg";
// import imgInfo from "../../assets/Images/Info Popup.svg";
// import imgOscars from "../../assets/Images/The Oscars.svg";
// import imgMicrofone from "../../assets/Images/Camping Chair.svg";
// import imgPage from "../../assets/Images/Page.svg";
// import imgCalendario from "../../assets/Images/Calendar.svg";
import imgRicardo from "../../assets/Images/image 136.svg";
import imgMarcos from "../../assets/Images/image 140.svg";


//componentes
import ComentariosFilme from "../../components/ComentariosFilme";

import { useParams } from "react-router-dom";


function FilmesInformacoes() {

    const [titulo, setTitulo] = useState<string>("");
    const [genero, setGenero] = useState<string>("");
    const [diretor, setDiretor] = useState<string>("");
    const [temporadas, setTemporadas] = useState<string>("");
    const [sinopse, setSinopse] = useState<string>("");
    const [ano, setAno] = useState<string>("");
    const [curtida, setCurtida] = useState<string>("");
    const [elenco, setElenco] = useState<string>("");
    const [tipo, setTipo] = useState<string>("");
    const [poster, setPoster] = useState<string>("");
    const [trailer, setTrailer] = useState<string>("");
    const [duracao, setDuracao] = useState<any>();
    const [classificacao, setClassificacao] = useState<string>("");
    const [nota_total, setNota_Total] = useState<any>();
    const [quantidade_post, setQuantidade_Post] = useState<any>();

    const { idFilme } = useParams();

    var filmeeee1: string = "";

    function exibirInformacoesFilme() {

        api.get("videos/" + idFilme)
            .then((response: any) => {

                console.log(response.data);
                // console.log("bananaaa")
                // console.log(response.data.trailer)

                setTitulo(response.data.titulo);
                setGenero(response.data.genero);
                setDiretor(response.data.diretor);
                setTemporadas(response.data.temporadas);
                setSinopse(response.data.sinopse);
                setAno(response.data.ano);
                setCurtida(response.data.curtida);
                setElenco(response.data.elenco);
                setTipo(response.data.tipo);
                setPoster(response.data.poster);
                setTrailer(response.data.trailer);
                setClassificacao(response.data.classificacao);
                setNota_Total(response.data.nota_total);
                setQuantidade_Post(response.data.quantidade_post);
                setDuracao(response.data.duracao);
            })
            .catch((error: any) => {
                console.log("Error", error)
            })
    }

    // function videoexibido(filmeeee : String){
    //  switch (idFilme){
    //     case "02747d66-ca89-11ee-8998-1831bfd54982":
    //         filmeeee = "https://www.youtube.com/watch?v=To4r67z73aw"
    //     case '1cfb0d24-c7ac-11ee-aac3-b445067b85b4':
    //         filmeeee = "https://www.youtube.com/watch?v=To4r67z73aw"
    //  }

    //  filmeeee = filmeeee1;

    //  console.log(filmeeee)

    // }


    useEffect(() => {
        exibirInformacoesFilme();
        // videoexibido(filmeeee1);
    }, [])

    return (
        <>

            <main id="detalhe_filmesInformacoes">
                <section className="Filmes">
                    <div className="banner_1">
                        {/* <p className="superbanner">BLÁMOVI: RECOMENDA</p> */}
                        {/* <img
                            className="img_rec"
                            src={imgSimboloBatman}
                            alt=""
                        /> */}
                    </div>
                    <div className="Banner2">
                        <h2>{titulo}</h2>
                        <h3>Gênero: {genero}</h3>
                        <p className="paragrafo_inicial">Ano: {ano} | Duração: {duracao}</p>
                        <p className="paragrafo_inicial">Tipo: {tipo} | Temporadas: {temporadas} | Classificação: {classificacao}</p>
                        <div className="botoes2">
                            <img
                                className="comentario"
                                src={imgBaloesComentarios}
                                alt=""
                            />
                            <img
                                className="coração"
                                src={imgCoracao}
                                alt=""
                            />
                            <Link className="recomendar" to={"/perfil"}>
                                RECOMENDAR
                            </Link>
                        </div>
                        <div className="banner_trailer">
                            <div className="banner_box_img">
                                <img
                                    className="banner_img"
                                    src={"http://localhost:8090/images/" + poster}
                                    alt="Batman"
                                />
                                <div className="referências">
                                    <div className="div_avaliacoes_filme">
                                        <img src={imgTrofeu} />
                                        <span>{nota_total / quantidade_post}</span>
                                    </div>
                                    <div className="div_avaliacoes_filme">
                                        <img src={imgBaloesComentarios} alt="" />
                                        <span>{quantidade_post}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="trailer">

                                <Link className="trailer1">
                                    <iframe
                                        width={930}
                                        height={400}
                                        src={trailer}
                                        title="YouTube video player"
                                        frameBorder={0}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                                    // allowFullScreen=""

                                    // <iframe width="560" height="315" 
                                    
                                    // src="https://www.youtube.com/embed/HJv4LQxbVEA?si=tTDuLwa9ZcBjP72q" 
                                    // title="YouTube video player" frameborder="0" 
                                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="informacoes_gerais">
                    <div>
                        <p className="titulo1">Sinópse</p>
                        <p className="sinopse">
                            {sinopse}
                        </p>
                    </div>
                    <div className="topico">
                        <img
                            className="bonecos"
                            src={imgBonecosGrupo}
                            alt=""
                        />
                    </div>
                    <p className="titulo1">Elenco Principal</p>
                    <div className="ator">
                        <p className="elenco">{elenco}</p>
                    </div>
                    <p className="titulo2">Direção</p>
                    <div className="elementos">
                        <div className="ator">
                            <p className="elenco">{diretor}</p>
                        </div>
                    </div>
                </section>

                <hr className="separar_comentario" />
                <section>
                    <div className="Comentarios_filmes">
                        <div>
                            <p className="subtitulo3">🗪 Comentários</p>
                        </div>
                    </div>

                    <ComentariosFilme
                        nome={"Amanda Bispo"}
                        texto={"Achei interessante. Um excelente filme que desmonta o esquema de golpes em larga escala, que ainda acontece, proporcionada pela veloz ascenção das criptomoedas e do enriquecimento rápido."}
                    />
                    <ComentariosFilme
                        nome={"Elton Todinho"}
                        texto={"Excelente filme, principalmente por ser real. Brian Banks foi vítima aos 16 anos de uma mentira que o levou a ficar na cadeia por 6 anos, e teria mais 5 na condicional. Lutou contra o sistema judicial como pôde, nunca perdeu as esperanças."}
                    />
                    <ComentariosFilme
                        nome={"Nicolas Henrique"}
                        texto={"Fui ler o livro por causa da série de TV que estreia logo e confesso que fui esperando um livro de suspense com ação. O livro é, na verdade, um drama que tem uma morte passada como ponto principal. Acho que a autora foi extremamente infeliz nesse final e espero que a série não siga pelo mesmo caminho"}
                    />
                    <ComentariosFilme
                        nome={"Flamarion Souza"}
                        texto={"Filme muito bom. Recomendo. Lógico que  em filme baseado  em fatos reais não muita ação.  Mas o contexto  foi bem trabalhado."}
                    />
                    <ComentariosFilme
                        nome={"João Victor"}
                        texto={"Muito bom!!! Um dos melhores filmes que já vi. É um filme leve, mas ainda assim conseguiu retratar muito bem os horrores do nazismo e dos campos de concentração, bem como da guerra. É uma linda história de amizade, apesar de seu trágico final. Mostra de forma ímpar a perda da inocência e a descoberta da realidade, assim como quando vc encontra alguém que será seu amigo (a) até o fim."}
                    />
                     <ComentariosFilme
                        nome={"Jorge Felix"}
                        texto={"Recomendo muito, mas se vc for do tipo q chora (não importando se é homem ou mulher), então vai descarregar suas lágrimas e muito. Nota 9/10."}
                    />
                </section>
            </main>
        </>
    );
}

export default FilmesInformacoes;   