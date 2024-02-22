import "./style.css"


//import imagens
import imgHome from "../../assets/images/Home.svg"
import imgHearth from "../../assets/images/Heart.svg"
import imgUser from "../../assets/images/User.svg"
import imgMufasaPerfil from "../../assets/images/mufasaperfil.svg"
import imgIconImg from "../../assets/images/iconImg.svg"
import imgIconLocal from "../../assets/images/iconLocal.svg"
import imgIconAnexo from "../../assets/images/iconAnexo.svg"
import imgIconSend from "../../assets/images/iconSend.svg"
import imgMadrigalPerfil from "../../assets/images/madrigalperfil.svg"
import imgToyStoryPost from "../../assets/images/balanoalvo.svg"
import imgLike from "../../assets/images/like.svg"
import imgComentar from "../../assets/images/comentar.svg"
import imgRecomendar from "../../assets/images/recomendar.svg"
import imgBuzz from "../../assets/images/buzzlightyear.svg"
import imgRoz from "../../assets/images/rozperfil.svg"
import imgProvaFogo from "../../assets/images/a-prova-de-fogo-1.jpg"
import imgFeedInfinito from "../../assets/images/feedinfinito.svg"

import Post from "../../components/post"
import Comentario from "../../components/Comentario"

function Feed() {

    //mudar para state
    const postFeed: any[] = [
        {
            id: 1,
            nome: "Antônio Madrigal",
            foto: imgMadrigalPerfil,
            data: "4m atrás",
            assistiu: "Assistiu - Toy Story 2",
            conteudoPost: "Acabei de assistir Toy Stroy 2 ! ! ! Que filme maravilhoso, para mim fica em primeiro lugar nos filmes Pixar. Assisti pelo YouTube.",
            imgPost: imgToyStoryPost,
            comentarios: [
                {
                    id: 2,
                    nome: "Buzz Lightyear",
                    foto: imgBuzz,
                    data: "2m atrás",
                    comentario: "Que bom que gostou!"
                }
            ]
        }, {
            id: 2,
            nome: "Roz",
            foto: imgRoz,
            data: "Ontem",
            assistiu: "Assistiu - À Prova de Fogo",
            conteudoPost: "Muita gente criticando, mas não vê o contexto todo da história, ela foi maltrata por ele por 7 anos aguentando calada, até que ela começou a se posicionar e não servir de empregada, pois até mulher ele procurava na internet, deixando ela de lado. A parte que ela ficou com ele somente pq ele ajudou a mãe dela com a quantidade de $, é somente um ponto do filme que poderia ser colocado outra história parecida, ele poderia ter pedido doação, vendido carro etc… O fato q ela não ficou com quem tinha mais  condições financeiras, pq ele não tinha, ele apenas tinha um trocado que ajuntou para o barco dele, era as economias, mas quem era mais  rico era o médico. Então não falem q foi por dinheiro, pq ela poderia nem ter voltado com ele, mesmo depois dele comprar a cadeira e a cama p mãe dela. Achei excelente o filme, só quem passa por isso sabe, as mulheres principalmente! Esse filme muito abençoado.",
            imgPost: imgProvaFogo,
            comentarios: []
        }, {
            id: 2,
            nome: "Roz",
            foto: imgRoz,
            data: "Ontem",
            assistiu: "Assistiu - À Prova de Fogo",
            conteudoPost: "Muita gente criticando, mas não vê o contexto todo da história, ela foi maltrata por ele por 7 anos aguentando calada, até que ela começou a se posicionar e não servir de empregada, pois até mulher ele procurava na internet, deixando ela de lado. A parte que ela ficou com ele somente pq ele ajudou a mãe dela com a quantidade de $, é somente um ponto do filme que poderia ser colocado outra história parecida, ele poderia ter pedido doação, vendido carro etc… O fato q ela não ficou com quem tinha mais  condições financeiras, pq ele não tinha, ele apenas tinha um trocado que ajuntou para o barco dele, era as economias, mas quem era mais  rico era o médico. Então não falem q foi por dinheiro, pq ela poderia nem ter voltado com ele, mesmo depois dele comprar a cadeira e a cama p mãe dela. Achei excelente o filme, só quem passa por isso sabe, as mulheres principalmente! Esse filme muito abençoado.",
            imgPost: imgProvaFogo,
            comentarios: []
        }
    ]

    return (
        <>
            <>
                <main id="feed">
                    {/*Formulário de envio*/}
                    <div className="newPost">
                        <div className="infoUser">
                            <img src={imgMufasaPerfil} alt="" />
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
                                        <img src={imgIconImg} alt="Adicione uma imagem" />
                                    </button>
                                    <button className="btnFileForm">
                                        <img src={imgIconLocal} alt="Adicione um local" />
                                    </button>
                                    <button className="btnFileForm">
                                        <img src={imgIconAnexo} alt="Anexe um arquivo" />
                                    </button>
                                </div>
                                <button className="btnFileForm">
                                    <img src={imgIconSend} alt="Publicar" />
                                </button>
                            </div>
                        </form>
                    </div>
                    {
                        postFeed.map((post: any) => {
                            return <div key={post.id}>
                                <Post
                                    nome={post.nome}
                                    foto={post.foto}
                                    data={post.data}
                                    conteudoPost={post.conteudoPost}
                                    img={post.imgPost}
                                    comentarios={post.comentarios}
                                    filme={post.assistiu}
                                />
                            </div>
                        })

                    }
                    {/* <ul className="posts">
                        {
                            postFeed.map((post: any) => {
                                return <div key={post.id}>
                                    <Post
                                        userNome={post.nome}
                                        foto={post.foto}
                                        data={post.data}
                                        assistiu={post.assistiu}
                                        conteudoPost={post.conteudoPost}
                                        img={post.img}
                                    />
                                </div>
                            })

                        }
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
                                <img src={imgComentar} alt="Recomendar" />
                                <span>Recomendar</span>
                            </button>
                        </div>
                    </ul> */}
                    <div className="carregamento">
                        <img src={imgFeedInfinito} alt="" />
                    </div>
                </main>
            </>

        </>
    )
}

export default Feed