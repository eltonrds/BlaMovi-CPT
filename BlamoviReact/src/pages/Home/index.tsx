import "./style.css"

import imgDestaques from "../../assets/img/section/film-everything-everywhere-all-at-once_ratio-16x9 1.svg";

import imgCriticoLeo from "../../assets/img/banner/Group 72.png";
import imgCriticoAna from "../../assets/img/banner/320x400 1.png";

//nao utilizavel 
// import ImgAvatar from "../../assets/img/banner/av.jpg"
// import ImgAvatarr from "../../assets/img/banner/av2.jpg"

// import imgStreamHbo from "../../assets/img/streams/HBO-MAX.png";
// import imgStreamNetflix from "../../assets/img/streams/NETFLIX.png";
// import imgStreamAmazon from "../../assets/img/streams/amazon.png";
// import imgStreamDisney from "../../assets/img/streams/DISNEY.png";
// import imgStreamStar from "../../assets/img/streams/star.png";
// import imgStreamYoutube from "../../assets/img/streams/youtube.png";

// import imgSetaDireita from "../../assets/img/elementos/Less Than (4).png";
// import imgSetaEsquerda from "../../assets/img/elementos/Less Than (3).png";

//componetes
// import CardLancamentos from "../../components/CardLancamentos";
// const moviesURL = import.meta.env.VITE_API;
// const apiKey = import.meta.env.VITE_API_KEY;

import Card from "../../components/Card";

//lib do carrosel
import { Swiper, SwiperSlide } from 'swiper/react';

//chamada da API
import api from "../../utils/api";
import { useEffect, useState } from "react";


function Home() {

    const [listaFilmes, setListaFilmes] = useState<any[]>([]);
    const [listaSeries, setListaSeries] = useState<any[]>([]);
    const [listaDocumentario, setlistaDocumentario] = useState<any[]>([]);

    function listarFilmes() {

        api.get("videos")
            .then((response: any) => {
                setListaFilmes(response.data);
                setListaSeries(response.data);
                setlistaDocumentario(response.data);
            })
            .catch((error: any) => {
                console.log("Error", error)
            })
    }

    useEffect(() => {
        listarFilmes();
    }, [])

    const data = [
        { id: '1', image: '../src/assets/img/banner/Frame 73.svg' },
        { id: '2', image: '../src/assets/img/banner/Frame 65.svg' },
        { id: '3', image: '../src/assets/img/banner/Frame 64.svg' },
    ]

    // const [topMovies, setTopMovies] = useState ([]);

    // const getTopRatedMovies = async (url) => {
    //     const res = await fetch(url);
    //     const data = await res.json();

    //     console.log(data);
    // }

    // useEffect(() =>{
    //     const topRatedURL = `${moviesURL}top_rated?${apiKey}`;

    //     getTopRatedMovies(topRatedURL);

    // })

    // const listaFilmes1: any[] = [
    //     {
    //         id: 1,
    //         titulo: "Batman: O Cavaleiro das Trevas",
    //         img: "src/assets/img/filmes-f/batman-(cav-das-tre).webp",
    //         // imgStream: imgStreamHbo,
    //         nota: 9.0,
    //         comentarios: [
    //             {
    //                 conteudo: "This movie is a work of art. The finest sequel ever made.",
    //                 usuario: "dseferaj"
    //             }, {
    //                 conteudo: "Dark, yes, complex, ambitious.",
    //                 usuario: "littlemartinarocena"
    //             }, {
    //                 conteudo: "I couldn't believe The Dark knight could live up to the hype.",
    //                 usuario: "filmquestint"
    //             }
    //         ]
    //     },

    //     {
    //         id: 2,
    //         titulo: "Joker",
    //         img: "src/assets/img/filmes-f/joker.webp",
    //         nota: 8.4,
    //         imgStream: imgStreamHbo,
    //         comentarios: [
    //             {
    //                 conteudo: "The movie affects you in a way that makes it physically painful to experience.",
    //                 usuario: "brianmlucas"
    //             }, {
    //                 conteudo: "Arthur Fleck's a guy with lofty aspirations, wants to make you laugh and disturb your foundations.",
    //                 usuario: "Xstal"
    //             }, {
    //                 conteudo: "Truly a masterpiece, The Best Hollywood film of 2019, one of the Best films of the decade.",
    //                 usuario: "Aman_Goyal"
    //             }
    //         ]
    //     },

    //     {
    //         id: 3,
    //         titulo: "Vingadores: Ultimato",
    //         img: "src/assets/img/filmes-f/image 111.jpg",
    //         nota: 8.4,
    //         imgStream: imgStreamDisney,
    //         comentarios: [
    //             {
    //                 conteudo: "Not as good as infinity war but a great movie",
    //                 usuario: "ACollegeStudent"
    //             }, {
    //                 conteudo: "This film is an emotional rollercoaster with some of the coolest superhero plot lines ever drawn up.",
    //                 usuario: "davyjones-636363"
    //             }, {
    //                 conteudo: "After Avengers Infinity War, we waited for the Avengers Endgame.",
    //                 usuario: "ahmetkozan"
    //             }
    //         ]
    //     },

    //     {
    //         id: 4,
    //         titulo: "Gladiador",
    //         img: "src/assets/img/filmes-f/gladiador.jpg",
    //         imgStream: imgStreamNetflix,
    //         nota: 9.4,

    //         comentarios: [
    //             {
    //                 conteudo: "Not as good as infinity war but a great movie",
    //                 usuario: "ACollegeStudent"
    //             }, {
    //                 conteudo: "This film is an emotional rollercoaster with some of the coolest superhero plot lines ever drawn up.",
    //                 usuario: "davyjones-636363"
    //             }, {
    //                 conteudo: "After Avengers Infinity War, we waited for the Avengers Endgame.",
    //                 usuario: "ahmetkozan"
    //             }
    //         ]
    //     },

    //     {
    //         id: 5,
    //         titulo: "Batman: O Cavaleiro das Trevas",
    //         img: "src/assets/img/filmes-f/batman-(cav-das-tre).webp",
    //         imgStream: imgStreamHbo,
    //         nota: 9.0,
    //         comentarios: [
    //             {
    //                 conteudo: "This movie is a work of art. The finest sequel ever made.",
    //                 usuario: "dseferaj"
    //             }, {
    //                 conteudo: "Dark, yes, complex, ambitious.",
    //                 usuario: "littlemartinarocena"
    //             }, {
    //                 conteudo: "I couldn't believe The Dark knight could live up to the hype.",
    //                 usuario: "filmquestint"
    //             }
    //         ]
    //     },

    //     {
    //         id: 6,
    //         titulo: "Joker",
    //         img: "src/assets/img/filmes-f/joker.webp",
    //         nota: 8.4,
    //         imgStream: imgStreamHbo,
    //         comentarios: [
    //             {
    //                 conteudo: "The movie affects you in a way that makes it physically painful to experience.",
    //                 usuario: "brianmlucas"
    //             }, {
    //                 conteudo: "Arthur Fleck's a guy with lofty aspirations, wants to make you laugh and disturb your foundations.",
    //                 usuario: "Xstal"
    //             }, {
    //                 conteudo: "Truly a masterpiece, The Best Hollywood film of 2019, one of the Best films of the decade.",
    //                 usuario: "Aman_Goyal"
    //             }
    //         ]
    //     },

    //     {
    //         id: 7,
    //         titulo: "Vingadores: Ultimato",
    //         img: "src/assets/img/filmes-f/image 111.jpg",
    //         nota: 8.4,
    //         imgStream: imgStreamDisney,
    //         comentarios: [
    //             {
    //                 conteudo: "Not as good as infinity war but a great movie",
    //                 usuario: "ACollegeStudent"
    //             }, {
    //                 conteudo: "This film is an emotional rollercoaster with some of the coolest superhero plot lines ever drawn up.",
    //                 usuario: "davyjones-636363"
    //             }, {
    //                 conteudo: "After Avengers Infinity War, we waited for the Avengers Endgame.",
    //                 usuario: "ahmetkozan"
    //             }
    //         ]
    //     },

    //     {
    //         id: 8,
    //         titulo: "Gladiador",
    //         img: "src/assets/img/filmes-f/gladiador.jpg",
    //         imgStream: imgStreamNetflix,
    //         nota: 9.4,

    //         comentarios: [
    //             {
    //                 conteudo: "Not as good as infinity war but a great movie",
    //                 usuario: "ACollegeStudent"
    //             }, {
    //                 conteudo: "This film is an emotional rollercoaster with some of the coolest superhero plot lines ever drawn up.",
    //                 usuario: "davyjones-636363"
    //             }, {
    //                 conteudo: "After Avengers Infinity War, we waited for the Avengers Endgame.",
    //                 usuario: "ahmetkozan"
    //             }
    //         ]
    //     }
    // ]

    // const listarFilmesClassicos: any[] = [
    //     {
    //         id: 1,
    //         titulo: "Senhor dos Aneis: A sociedade do anel",
    //         img: "src/assets/img/classicos/Senhor Dos Aneis.png",
    //         imgStream: imgStreamHbo,
    //         nota: 9.2,
    //         comentarios: [
    //             {
    //                 conteudo: "A masterclass in film making, is The Godfather a contender for the best film of all time?",
    //                 usuario: "Sleepin_Dragon"
    //             }, {
    //                 conteudo: "It is now past 1 PM and I just finished watching Francis Ford Coppola's The Godfather. I should probably go to bed. ",
    //                 usuario: "andrewburgereviews"
    //             }, {
    //                 conteudo: "his isn't just a beautifully crafted gangster film.",
    //                 usuario: "gogoschka-1"
    //             }
    //         ]
    //     },

    //     {
    //         id: 2,
    //         titulo: "O Poderoso Chefão",
    //         img: "src/assets/img/classicos/20120876 1.png",
    //         imgStream: imgStreamNetflix,
    //         nota: 9.2,
    //         comentarios: [
    //             {
    //                 conteudo: "A masterclass in film making, is The Godfather a contender for the best film of all time?",
    //                 usuario: "Sleepin_Dragon"
    //             }, {
    //                 conteudo: "It is now past 1 PM and I just finished watching Francis Ford Coppola's The Godfather. I should probably go to bed. ",
    //                 usuario: "andrewburgereviews"
    //             }, {
    //                 conteudo: "his isn't just a beautifully crafted gangster film.",
    //                 usuario: "gogoschka-1"
    //             }
    //         ]
    //     },

    //     {
    //         id: 3,
    //         titulo: "O Show de Truman: O Show da Vida",
    //         img: "src/assets/img/classicos/20-the-truman-show.png",
    //         imgStream: imgStreamAmazon,
    //         nota: 8.2,
    //         comentarios: [
    //             {
    //                 conteudo: "The Truman Show is a film I never got around to watching until now, despite having heard references to it here and there over the past.",
    //                 usuario: "skepticskeptical"
    //             }, {
    //                 conteudo: "I have never liked Jim Carey's humor. I have found it to very broad and boorish.",
    //                 usuario: "planktonrules"
    //             }, {
    //                 conteudo: "As inventive and creative as Weir's staging is, The Truman Show wouldn't work without credible Truman.",
    //                 usuario: "MrPupkin"
    //             }
    //         ]
    //     },

    //     {
    //         id: 4,
    //         titulo: "Alien - O 8º Passageiro",
    //         img: "src/assets/img/classicos/06-Alien.png",
    //         imgStream: imgStreamStar,
    //         nota: 8.5,

    //         comentarios: [
    //             {
    //                 conteudo: "Alien remains one of the most original, terrifying movies of all time.",
    //                 usuario: "Sleepin_Dragon"
    //             }, {
    //                 conteudo: "'Alien' is one of those special films that have aged very, very well.",
    //                 usuario: "gogoschka-1"
    //             }, {
    //                 conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
    //                 usuario: "ivo-cobra8"
    //             }
    //         ]
    //     }


    // ]

    // const listarSeries: any[] = [
    //     {
    //         id: 1,
    //         titulo: "The last of us",
    //         img: "src/assets/img/series-f/The-last-of-us.jpg",
    //         // imgStream: imgStreamHbo,
    //         nota: 8.5,
    //         comentarios: [
    //             {
    //                 conteudo: "Alien remains one of the most original, terrifying movies of all time.",
    //                 usuario: "Sleepin_Dragon"
    //             }, {
    //                 conteudo: "'Alien' is one of those special films that have aged very, very well.",
    //                 usuario: "gogoschka-1"
    //             }, {
    //                 conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
    //                 usuario: "ivo-cobra8"
    //             }
    //         ]
    //     },

    //     {
    //         id: 2,
    //         titulo: "A Casa do Dragao",
    //         img: "src/assets/img/series-f/A-casa-dos-dragões.jpg",
    //         // imgStream: imgStreamHbo,
    //         nota: 8.5,
    //         comentarios: [
    //             {
    //                 conteudo: "Alien remains one of the most original, terrifying movies of all time.",
    //                 usuario: "Sleepin_Dragon"
    //             }, {
    //                 conteudo: "'Alien' is one of those special films that have aged very, very well.",
    //                 usuario: "gogoschka-1"
    //             }, {
    //                 conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
    //                 usuario: "ivo-cobra8"
    //             }
    //         ]
    //     },

    //     {
    //         id: 3,
    //         titulo: "Beef",
    //         img: "src/assets/img/series-f/image 30.png",
    //         // imgStream: imgStreamHbo,
    //         nota: 8.5,
    //         comentarios: [
    //             {
    //                 conteudo: "Alien remains one of the most original, terrifying movies of all time.",
    //                 usuario: "Sleepin_Dragon"
    //             }, {
    //                 conteudo: "'Alien' is one of those special films that have aged very, very well.",
    //                 usuario: "gogoschka-1"
    //             }, {
    //                 conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
    //                 usuario: "ivo-cobra8"
    //             }
    //         ]
    //     },

    //     {
    //         id: 4,
    //         titulo: "Mandalorian",
    //         img: "src/assets/img/series-f/mandalorian.jpg",
    //         // imgStream: imgStreamDisney,
    //         nota: 8.5,
    //         comentarios: [
    //             {
    //                 conteudo: "Alien remains one of the most original, terrifying movies of all time.",
    //                 usuario: "Sleepin_Dragon"
    //             }, {
    //                 conteudo: "'Alien' is one of those special films that have aged very, very well.",
    //                 usuario: "gogoschka-1"
    //             }, {
    //                 conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
    //                 usuario: "ivo-cobra8"
    //             }
    //         ]
    //     }
    // ]

    // const listarMaratonas: any[] = [
    //     {
    //         id: 1,
    //         titulo: "Rambo - Programado Para Matar",
    //         img: "src/assets/img/filmes-f/rambo1.png",
    //         // imgStream: imgStreamYoutube,
    //         nota: 7.7,
    //         comentarios: [
    //             {
    //                 conteudo: "Alien remains one of the most original, terrifying movies of all time.",
    //                 usuario: "Sleepin_Dragon"
    //             }, {
    //                 conteudo: "'Alien' is one of those special films that have aged very, very well.",
    //                 usuario: "gogoschka-1"
    //             }, {
    //                 conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
    //                 usuario: "ivo-cobra8"
    //             }
    //         ]
    //     },

    //     {
    //         id: 2,
    //         titulo: "Rambo II: A Missão",
    //         img: "src/assets/img/filmes-f/rambo2.png",
    //         // imgStream: imgStreamYoutube,
    //         nota: 6.5,
    //         comentarios: [
    //             {
    //                 conteudo: "Alien remains one of the most original, terrifying movies of all time.",
    //                 usuario: "Sleepin_Dragon"
    //             }, {
    //                 conteudo: "'Alien' is one of those special films that have aged very, very well.",
    //                 usuario: "gogoschka-1"
    //             }, {
    //                 conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
    //                 usuario: "ivo-cobra8"
    //             }
    //         ]
    //     },

    //     {
    //         id: 3,
    //         titulo: "Rambo III",
    //         img: "src/assets/img/filmes-f/rambo3.png",
    //         // imgStream: imgStreamYoutube,
    //         nota: 5.8,
    //         comentarios: [
    //             {
    //                 conteudo: "Alien remains one of the most original, terrifying movies of all time.",
    //                 usuario: "Sleepin_Dragon"
    //             }, {
    //                 conteudo: "'Alien' is one of those special films that have aged very, very well.",
    //                 usuario: "gogoschka-1"
    //             }, {
    //                 conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
    //                 usuario: "ivo-cobra8"
    //             }
    //         ]
    //     },

    //     {
    //         id: 4,
    //         titulo: "Rambo IV",
    //         img: "src/assets/img/filmes-f/rambo4.png",
    //         // imgStream: imgStreamYoutube,
    //         nota: 7.0,
    //         comentarios: [
    //             {
    //                 conteudo: "Alien remains one of the most original, terrifying movies of all time.",
    //                 usuario: "Sleepin_Dragon"
    //             }, {
    //                 conteudo: "'Alien' is one of those special films that have aged very, very well.",
    //                 usuario: "gogoschka-1"
    //             }, {
    //                 conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
    //                 usuario: "ivo-cobra8"
    //             }
    //         ]
    //     }
    // ]

    // const listarMaratonas: any[] = [
    //     {
    //         id: 1,
    //         titulo: "Rambo - Programado Para Matar",
    //         img: "src/assets/img/filmes-f/rambo1.png",
    //         imgStream: imgStreamYoutube,
    //         nota: 7.7,
    //         comentarios: [
    //             {
    //                 conteudo: "Alien remains one of the most original, terrifying movies of all time.",
    //                 usuario: "Sleepin_Dragon"
    //             }, {
    //                 conteudo: "'Alien' is one of those special films that have aged very, very well.",
    //                 usuario: "gogoschka-1"
    //             }, {
    //                 conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
    //                 usuario: "ivo-cobra8"
    //             }
    //         ]
    //     },

    //     {
    //         id: 2,
    //         titulo: "Rambo II: A Missão",
    //         img: "src/assets/img/filmes-f/rambo2.png",
    //         imgStream: imgStreamYoutube,
    //         nota: 6.5,
    //         comentarios: [
    //             {
    //                 conteudo: "Alien remains one of the most original, terrifying movies of all time.",
    //                 usuario: "Sleepin_Dragon"
    //             }, {
    //                 conteudo: "'Alien' is one of those special films that have aged very, very well.",
    //                 usuario: "gogoschka-1"
    //             }, {
    //                 conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
    //                 usuario: "ivo-cobra8"
    //             }
    //         ]
    //     },

    //     {
    //         id: 3,
    //         titulo: "Rambo III",
    //         img: "src/assets/img/filmes-f/rambo3.png",
    //         imgStream: imgStreamYoutube,
    //         nota: 5.8,
    //         comentarios: [
    //             {
    //                 conteudo: "Alien remains one of the most original, terrifying movies of all time.",
    //                 usuario: "Sleepin_Dragon"
    //             }, {
    //                 conteudo: "'Alien' is one of those special films that have aged very, very well.",
    //                 usuario: "gogoschka-1"
    //             }, {
    //                 conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
    //                 usuario: "ivo-cobra8"
    //             }
    //         ]
    //     },

    //     {
    //         id: 4,
    //         titulo: "Rambo IV",
    //         img: "src/assets/img/filmes-f/rambo4.png",
    //         imgStream: imgStreamYoutube,
    //         nota: 7.0,
    //         comentarios: [
    //             {
    //                 conteudo: "Alien remains one of the most original, terrifying movies of all time.",
    //                 usuario: "Sleepin_Dragon"
    //             }, {
    //                 conteudo: "'Alien' is one of those special films that have aged very, very well.",
    //                 usuario: "gogoschka-1"
    //             }, {
    //                 conteudo: "One of the best classic sci-fi horror films of all time - A masterpiece.",
    //                 usuario: "ivo-cobra8"
    //             }
    //         ]
    //     }
    // ]

    // const listarLancamentos: any[] = [
    //     {
    //         id: 1,
    //         titulo: "01 Junho",
    //         titulo2: "Homem-Aranha: Através do Aranhaverso",
    //         img: "src/assets/img/filmes-f/image84.png",
    //         link: "https://www.youtube.com/watch?v=_4is7I_ZxTg&pp=ygUtdHJhaWxlciBob21lbSBhcmFuaGEgYXRyYXbDqXMgZG8gYXJhbmhhdmVyc28g",

    //     },

    //     {
    //         id: 2,
    //         titulo: "08 Junho",
    //         titulo2: "Transformers: O Despertar das Feras",
    //         img: "src/assets/img/filmes-f/image 83.png",
    //         link: "https://www.youtube.com/watch?v=PHC412-pCoQ&pp=ygUrdHJhaWxlciBUcmFuc2Zvcm1lcnM6IE8gRGVzcGVydGFyIGRhcyBGZXJhcw%3D%3D",

    //     },

    //     {
    //         id: 3,
    //         titulo: "14 Junho",
    //         titulo2: "The Flash",
    //         img: "src/assets/img/filmes-f/image 85.png",
    //         link: "https://www.youtube.com/watch?v=xMbg-ZsFCCo&pp=ygURdHJhaWxlciBUaGUgRmxhc2g%3D",

    //     },

    //     {
    //         id: 4,
    //         titulo: "28 Junho",
    //         titulo2: "O Demônio dos Mares",
    //         img: "src/assets/img/filmes-f/blackdemon.png",
    //         link: "https://www.youtube.com/watch?v=yX-pvjO4N3o&pp=ygUUTyBERU3DlE5JTyBET1MgTUFSRVM%3DD",

    //     }
    // ]

    return (
        <>
            <main id="main_home">

                <Swiper
                    slidesPerView={1}
                    // pagination={{ clickable: true }}
                    navigation
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.image}
                                alt="Silder"
                                className="slider-item"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* <img id="#avatar" src={ImgAvatarr} alt="" />   */}

                <section className="destaque">
                    <div className="destaque_conteudo">








                        <img
                            src={imgDestaques}
                            alt=""
                        />
                        <div>
                            <h2>Tudo em Todo Lugar ao Mesmo Tempo</h2>
                            <p>
                                Ganhador de 10 Oscars, “Tudo em Todo Lugar Ao Mesmo Tempo” , filme
                                dirigido por Daniel Scheinert e Daniel Kwan, acompanha a história de
                                uma imigrante chinesa que com sua lavanderia à beira do fracasso e seu
                                casamento com o marido covarde em ruínas, ela luta para lidar com
                                tudo, incluindo um relacionamento ruim com seu pai crítico e sua
                                filha.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="comentarios">
                    <div className="container">
                        <div className="container_conteudo">
                            <img src={imgCriticoLeo} alt="" />
                            <div>
                                <h3>Leonardo Pereira</h3>
                                <p>
                                    "O roteiro é tão bem estruturado que consegue construir, com sucesso
                                    diversos universos em apenas um filme"
                                </p>
                                <p>Nvl de critico na Blámovi</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="container_conteudo">
                            <img src={imgCriticoAna} alt="" />
                            <div>
                                <h3>Ana Cristina </h3>
                                <p>
                                    "Se tem uma coisa que eu aprecio na vida é quando um filme supera
                                    absurdamente as minhas expectativas. E foi o que aconteceu com Tudo
                                    em Todo Lugar ao Mesmo Tempo"
                                </p>
                                <p>Nvl de critico na Blámovi</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="Filmes_Destaques">
                    <h2>⭐ Filmes Favoritos</h2>
                    <div className="card-linha">

                        <Swiper className="swipercard"
                            slidesPerView={3}
                            pagination={{ clickable: true }}
                            navigation>

                            {listaFilmes.map((card: any) => (
                                card.tipo == "Filme" ?
                                    <SwiperSlide className="swiper-slide-card" key={card.id}>
                                        <Card
                                            poster={card.poster}
                                            titulo={card.titulo}
                                            nota={card.nota_total / card.quantidade_post}
                                            coment={card.quantidade_post}
                                            id={card.id}
                                        />
                                    </SwiperSlide>
                                    : ""
                            ))}
                        </Swiper>

                    </div>

                </section>

                {/* <section className="Clássicos">
                    <h2>🎭 Clássicos</h2>
                    <div className="card-linha">

                        <Swiper className="swipercard"
                            slidesPerView={4}
                            pagination={{ clickable: true }}
                            navigation
                        >

                            {listaSeries.map((card: any) => (
                                card.tipo == "Série" ?
                                    <SwiperSlide className="swiper-slide-card" key={card.id}>
                                        <Card
                                            poster={card.poster}
                                            titulo={card.titulo}
                                            nota={card.nota_total / card.quantidade_post}
                                            coment={card.quantidade_post}
                                        />
                                    </SwiperSlide>
                                    : ""
                            ))}
                        </Swiper>                       


                        <img
                                src={imgSetaEsquerda} alt=""
                            />
                                {
                                    listarFilmesClassicos.map((card: any) => {
                                        return<div key={card.id
                                        }>
                                        <Card
                                            img={card.img}
                                            titulo={card.titulo}
                                            foto={card.img}
                                            // imgStream={card.imgStream}
                                            nota={card.nota}
                                            comentarios={card.comentarios}
                                        /></div>
                                    })

                                }
                            <img src={imgSetaDireita} alt="" />
                    </div>
                </section> */}

                <section className="Melhores_series">
                    <h2>🎭 Series</h2>
                    <div className="card-linha">

                        <Swiper className="swipercard"
                            slidesPerView={3}
                            pagination={{ clickable: true }}
                            navigation>

                            {listaSeries.map((card: any) => (
                                card.tipo == "Série" ?
                                    <SwiperSlide className="swiper-slide-card" key={card.id}>
                                        <Card
                                            poster={card.poster}
                                            titulo={card.titulo}
                                            nota={card.nota_total / card.quantidade_post}
                                            coment={card.quantidade_post}
                                        />
                                    </SwiperSlide>
                                    : ""
                            ))}
                        </Swiper>



                        {/* {
                            listarSeries.map((card: any) => {
                                return<div key={card.id
                                }>
                                <Card
                                    img={card.img}
                                    titulo={card.titulo}
                                    foto={card.img}
                                    // imgStream={card.imgStream}
                                    nota={card.nota}
                                    comentarios={card.comentarios}
                                /></div>
                            }) */}



                        {/* <Swiper className="swipercard"
                            slidesPerView={5}
                            pagination={{ clickable: true }}
                            navigation
                        >
                            {listaSeries.map((card: any) => (
                                <SwiperSlide className="swiper-slide-card" key={card.id}>
                                    <Card
                                        img={card.img}
                                        titulo={card.titulo}
                                        foto={card.img}
                                        nota={card.nota}
                                        comentarios={card.comentarios}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper> */}
                    </div>
                </section>

                <section className="Para_maratonar">
                    <h2>🎥 Documentario</h2>
                    <div className="card-linha">

                        <Swiper className="swipercard"
                            slidesPerView={3}
                            pagination={{ clickable: true }}
                            navigation>

                            {listaDocumentario.map((card: any) => (
                                card.tipo == "Documentário" ?
                                    <SwiperSlide className="swiper-slide-card" key={card.id}>
                                        <Card
                                        id={card.id}
                                            poster={card.poster}
                                            titulo={card.titulo}
                                            nota={card.nota_total / card.quantidade_post}
                                            coment={card.quantidade_post}
                                        />
                                    </SwiperSlide>
                                    : ""
                            ))}
                        </Swiper>




                        {/* <Swiper className="swipercard"
                            slidesPerView={5}
                            pagination={{ clickable: true }}
                            navigation
                        >
                            {listarMaratonas.map((card: any) => (
                                <SwiperSlide className="swiper-slide-card" key={card.id}>
                                    <Card
                                        img={card.img}
                                        titulo={card.titulo}
                                        foto={card.img}
                                        nota={card.nota}
                                        comentarios={card.comentarios}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper> */}



                        {/* <img src={imgSetaEsquerda} alt="" />
                        {
                            listarMaratonas.map((card: any) => {
                                return<div key={card.id
                                }>
                                <Card                                
                                    img={card.img}
                                    titulo={card.titulo}
                                    foto={card.img}
                                    // imgStream={card.imgStream}
                                    nota={card.nota}
                                    comentarios={card.comentarios}
                                /></div>
                            })
                        }
                        <img src={imgSetaDireita} alt="" /> */}
                    </div>
                </section>

                {/* <section className="Lancamentos">
                    <h2>📅 Lançamentos</h2>
                    <div className="card-linha">

                        <Swiper className="swipercard"
                            slidesPerView={5}
                            pagination={{ clickable: true }}
                            navigation
                        >
                            {listarLancamentos.map((cardLancamentos: any) => (
                                <SwiperSlide className="swiper-slide-card" key={cardLancamentos.id}>
                                    <CardLancamentos
                                        id={cardLancamentos.id}
                                        titulo={cardLancamentos.titulo}
                                        img={cardLancamentos.img}
                                        titulo2={cardLancamentos.titulo2}
                                        foto={cardLancamentos.img}
                                        link={cardLancamentos.link}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>


                        <img src={imgSetaEsquerda} alt="" /> 
                        <div className="card_responsivo">
                        {
                            listarLancamentos.map((cardLancamentos: any) => {
                                return<div key={cardLancamentos.id
                                }>
                                <CardLancamentos
                                    id={cardLancamentos.id}
                                    titulo={cardLancamentos.titulo}
                                    img={cardLancamentos.img}
                                    titulo2={cardLancamentos.titulo2}
                                    foto={cardLancamentos.img}
                                    link={cardLancamentos.link}
                                    
                                />
                                </div>
                            })
                        }
                        </div>                       
                        
                        
                        <img src={imgSetaDireita} alt="" />
                    </div>
                    <Link className="input-submit" to="/calendario">+ Lançamentos</Link>
                </section> */}
            </main>


        </>
    )
}

export default Home;