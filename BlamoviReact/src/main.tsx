


import React from 'react'
import ReactDOM from 'react-dom/client'


// componentes
import Header from './components/Header'
import Calendario from './pages/Calendario'
import Footer from './components/Footer'
import Feed from './pages/Feed'
import PerfilUsuario from './pages/PerfilUsuario'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
// import Post from './components/Post'
// import Comentario from  './components/Comentario'
import RecuperacaoSenha from './pages/RecuperacaoSenha'
import Contato from './pages/Contato'


import './index.css'


// componentes

import FilmesInformacoes from './pages/FilmesInformacoes'


import { BrowserRouter, Routes, Route } from "react-router-dom"

// import secureLocalStorage from 'react-secure-storage'



// function logado() {
//   if (secureLocalStorage.getItem("user")) {
//     const objetoUsuario: any = secureLocalStorage.getItem("user");

//     const nome: string = objetoUsuario.user.nome.trim().split(" ")[0];

//     return { logado: true, nomeUsuario: nome }
//   }
//   else {
//     return { logado: false, nomeUsuario: null }
//   }
// }




import Home from './pages/Home';
import Favoritos from './pages/Favoritos';

//Biblioteca 
import { register } from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favoritos' element={<Favoritos/>} /> 
        {/* <Route path='NomeDaRota' element={<NomeDoComponente/>}/> */}
       {/* <Route path='/post' element={<Post/>}/>  */}
       {/* <Route path='/comentario' element={<Comentario/>}/>  */}
       <Route path='/perfil' element={<PerfilUsuario/>}/>
       <Route path='/feed' element={<Feed/>}/>
       <Route path='/calendario' element={<Calendario/>}/>
       <Route path='/Cadastro' element={<Cadastro/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/senha' element={<RecuperacaoSenha/>}/> 
       <Route path='/filmesInformacoes/:idFilme' element={<FilmesInformacoes />} />
       <Route path='/contato' element={<Contato/>}/>
       <Route path='/recuperacaosenha' element={<RecuperacaoSenha/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>)
