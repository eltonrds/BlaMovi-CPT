import "./style.css"

import imgHome from "../../assets/Home.svg"
import imgIconUser33 from "../../assets/images/IconUser33.png"
import imgGroupMessage from "../../assets/images/Group Message.png"
import imgLock from "../../assets/images/Lock.png"
import imglogo from "../../assets/images/logo.png"
import imgfaceBranco from "../../assets/images/faceBranco.svg"
import imgInstaBranco from "../../assets/images/InstaBranco.svg"
import imgtwitterBranco from "../../assets/images/twitterBranco.svg"
import imgWhatsBranco from "../../assets/images/WhatsBranco.svg"
import imgbanner from "../../assets/images/cineminha.png"



//hooks
import { useState } from "react";

//estilização
import "./style.css"

//rotas
import { Link, useNavigate } from "react-router-dom";

//localStorage
// import secureLocalStorage from "react-secure-storage";


function RecuperacaoSenha() {
    return(
        <>



        <main   className="banner" id="recuperacao_senha" >

        <div className="cineminhacorpo">
        {/* <img className="cineminha" src={imgbanner}  /> */}
        </div>
        {/* <div className="bannercineminha">

        </div> */}


  <div className="container">



          <Link to={"#"} className="links" id="paracadastro"></Link>
          <Link to={"#"} className="links" id="paralogin" ></Link>
    <div className="content">

       {/*FORMULÁRIO DE CADASTRO*/}
      <div id="cadastro">
        <form className="ajustes " method="post" action="">
          <h1>Alterar Senha</h1>
          <div className="input">
            <img
              className="form-label"
              src={imgGroupMessage}
            />
            <div className="input-email">
              <label htmlFor="email_cad">Seu Email</label>
              <input

           id="email_cad"
          name="email_cad"
          required={true}
            type="email"

            // referencia


                // id="nome_cad"
                // name="nome"   //nome_cad
                // type="text"
                // value={formData.nome}
                // //required={true}
                // onChange={handleInputChange}
                // required
              />
              {/* //{formErrors.nome && <span className="error">{formErrors.nome}</span>} */}
            </div>
          </div>
          <div className="input">
            <img
              className="form-label"
              src={imgIconUser33 }
            />
            <div className="input-nome">
              <label htmlFor="nome_cad">Nome</label>
              <input
                id="nome_cad"
                name="nome_cad"
                required={true}
                type="text"
              />
            </div>
          </div>
          <div className="input">
            <img className="form-label" src={imgLock} />
            <div className="input-senha">
              <label htmlFor="senha_cad">Nova Senha</label>
              <input


             id="senha_cad"
             name="senha_cad"
             required={true}
              type="password"


                // id="senha_cad"
                // name="senha"
                // type="password"
                // value={formData.senha}
                // //required={true}
                // onChange={handleInputChange}
                // required
              />
            </div>
          </div>
          <div className="input">
            <img className="form-label" src={imgLock} />
            <div className="input-conf-senha">
              <label htmlFor="confirma-senha">Confirmar Senha</label>
              <input
                       id="confirma_cad"
                name="confirma_cad"
                required={true}
                type="password"


                // id="confirma-senha"
                // name="confirma-senha"
                // type="password"
                // value={formData.confirmaSenha}
                // //required={true}
                // onChange={handleInputChange}
                // required
              />
            </div>
          </div>
          {/* <div className="input">
            <img
              className="form-label"
              src={imgIconUser33}
            />
            <div className="input-user">
              <label htmlFor="user">Usuario</label>
              <input

               id="user"
               name="user"
               type="text"
               value={formData.user}
               //required={true}
               onChange={handleInputChange}
               required
               />
            </div>
          </div>
          <div className="input">
            <img
              className="form-label"
              src={imgIconUser33}
            />
            <div className="input-foto">
              <label htmlFor="foto">Foto</label>
              <input id="foto" name="foto" required={true} type="file" />
            </div>
          </div> */}
          <div className="input-submit">
              <input type="submit" defaultValue="Alterar" /> 
            </div>

          {/* <hr class="linha"> */}
          <div className="alinhamento">
            <p className="link">
     
              <Link to={"#"}>Login</Link>
             
            </p>
          </div>
        </form>
        <div className="contato">
          <div className="imagem">
            <img src={imglogo} />
            {/* <a href="contato@blamovi.com">contato@blamovi.com</a> */}
            <img src={imgfaceBranco} alt="" />
            <img src={imgInstaBranco} alt="" />
            <img
              src={imgtwitterBranco}
              alt=""
            />
            <img src={imgWhatsBranco} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
        </>
    )
}

export default RecuperacaoSenha