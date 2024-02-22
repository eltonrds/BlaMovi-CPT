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

function Contato() {
  return (
    <>

      <main className="banner" id="main_contato" >

        <div >
          {/* <img className="cineminha" src={imgbanner}  />  */}
        </div>
        {/* <div className="bannercineminha">

        </div> */}

        <div className="container">



          <a className="links" id="paracadastro" />
          <a className="links" id="paralogin" />
          <div className="content">


            {/*FORMULÁRIO DE CONTATO*/}

            <div id="cadastro">
              <form className="ajustes " method="post" action="">
                <h1>Contato</h1>
                <div className="input">



                </div>
                <div className="input">
                  <img
                    className="form-label"
                    src={imgIconUser33}
                  />
                  <div className="input-nome">
                    <label htmlFor="nome_cad">Seu Nome</label>
                    <input


                      id="nome_cad"
                      name="nome_cad"
                      required={true}
                      type="text"
                    //  id="email_cad"
                    //  name="email_cad"
                    //  required //={true}
                    //  type="text" // email
                    //  {renderErrorMessage("email_cad")}
                    />
                  </div>
                </div>
                <div className="input">
                  <img className="form-label" src={imgLock} />
                  <div className="input-email ">
                    <label htmlFor="email_cad">Seu email</label>
                    <input

                      id="email_cad"
                      name="email_cad"
                      required={true}
                      type="email"



                    />
                  </div>
                </div>
                <div className="input">
                  <img
                    className="form-label"
                    src={imgIconUser33}
                  />
                  <div className="input-user">
                    <label htmlFor="user">Usuario</label>
                    <input
                      id="user"
                      name="user"
                      required={true}
                      type="text" />
                  </div>
                </div>
                <div className="input">
                  <img
                    className="form-label"
                    src={imgIconUser33}
                  />
                  <div className="input-select">
                    <label htmlFor="select">Motivo</label>
                    <select name="Motivo do Contato">
                      <option value="valor1">Reclamações</option>
                      <option value="valor2" selected={true}>
                        Duvidas
                      </option>
                      <option value="valor3">Sugestôes</option>
                    </select>
                  </div>
                </div>
                <label>Mensagem:</label>
                <br />
                <textarea
                  className="msg"
                  cols={35}
                  rows={8}
                  placeholder="Insira seu texto"
                  defaultValue={""}
                />
                <br />
              </form>
              <div className="input-submit">
                <input type="submit" defaultValue="Enviar" />
              </div>
              <hr className="linha" />
              <div className="alinhamento">
                <p className="link2">
                  Já tem conta?
                  <a href="#paralogin">
                    {" "}
                    <br />
                    Cadastre-se agora!{" "}
                  </a>
                </p>
              </div>
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

export default Contato