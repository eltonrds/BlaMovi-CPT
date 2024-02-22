
// Referencia https://contactmentor.com/login-form-react-js-code/?expand_article=1


// import imgIconUser33 from "../../assets/images/IconUser33.png"
import imgGroupMessage from "../../assets/images/Group Message.png"
import imgLock from "../../assets/images/Lock.png"
import imglogo from "../../assets/images/logo.png"
import imgfaceBranco from "../../assets/images/faceBranco.svg"
import imgInstaBranco from "../../assets/images/InstaBranco.svg"
import imgtwitterBranco from "../../assets/images/twitterBranco.svg"
import imgWhatsBranco from "../../assets/images/WhatsBranco.svg"
// import imgbanner from "../../assets/images/cineminha.png"

//hooks
import { useState } from "react";

//estilização
import "./style.css"

//rotas
import { Link, useNavigate } from "react-router-dom";


function Login() {

  //Variavel navigate que utiliza a função useNavigate para navegar entre os componentes
  const navigate = useNavigate();

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmited, setIsSubmitted] = useState(false);


  const database = [
    {
      email: "user1",
      password: "pass1"
    },
    {
      email: "user1",
      password: "pass1"
    }

  ];

  const errors = {
    email_cad: "invalid username",
    senha_cad: "invalid password"
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    var { email_cad, senha_cad } = document.forms[0];

    const userData = database.find((user) => user.email === email_cad.value);

    if (userData) {
      if (userData.password !== senha_cad.value) {
        // senha invalida
        setErrorMessages({ name: "senha_cad", message: errors.senha_cad });
      } else {
        setIsSubmitted(true);
      }
    } else {

      setErrorMessages({ name: "email_cad", message: errors.email_cad });
    }

  };

   /////////// VALIDAÇÃO DO LOGIN ////////////

   function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();


      // Você pode usar o useHistory ou uma biblioteca de roteamento, como react-router-dom, para fazer isso.
  
    const validLogin = () => {
      if (email === 'usuario' && senha === 'usuario') {
        alert('Sucesso');
        history.push('/perfil'); // Redirecionar o usuário para a página de perfil
      } else {
        alert('Usuário ou senha incorretos');
      }
    }
  };


  return (
    <>

      <main className="banner" id="ajustes3" >

        <div >
          {/* <img className="cineminha" src={imgbanner}  />  */}
        </div>
        {/* <div className="bannercineminha">
        
        </div> */}

        <div className="container">



          <Link to={"#"} className="links" id="paracadastro"></Link>
          <Link to={"#"} className="links" id="paralogin" ></Link>
          <div className="content">
            <div id="cadastro">
              <form className="ajustes " method="post" action="" >
                <h1>Login</h1>
                <div className="input">



                </div>
                <div className="input">
                  <img
                    className="form-label"
                    src={imgGroupMessage}
                  />
                  <div className="input-email">
                    <label htmlFor="email_cad">Seu e-mail</label>
                    <input
                      id="email_cad"     /// O que realmente é do codigo 
                      name="email_cad"
                      required //={true}
                      type="email" // email
                      // {renderErrorMessage("email_cad")}
                    />
                  </div>
                </div>
                <div className="input">
                  <img className="form-label" src={imgLock} />
                  <div className="input-senha">
                    <label htmlFor="senha_cad">Sua senha</label>
                    <input

                      id="senha_cad"     /// O que realmente é do codigo 
                      name="senha_cad"
                      required //={true}
                      type="password" // email
                      // {renderErrorMessage("senha_cad")}
                 


                    />
                  </div>
                </div>
                <div className="input">


                </div>
                <div className="input-submit">
                  <Link to={"/perfil"}>
                  <input type="submit" value="Logar" />
                  </Link>
                </div>



                {/* <hr class="linha"> */}
                <div className="alinhamento">
                  <p className="link">

                    <Link to={"#"}>Cadastrar</Link>

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

      {/* <footer className="ajustesrodape" >

    <div className="rodapejf1" >
      
      <ul className="rodapejf">
        <li><a href="#" title="Home">Favoritos</a></li>
        <li><a href="#" title="login">Home</a></li>
        <li><a href="#" title="pesquisar">Pesquisar</a></li>
        <li><a href="#" title="login">Login</a></li>
        <li><a href="#" title="noticias">Noticias</a></li>
        <li><a href="#" title="informações">Informações</a></li>
        <li><a href="#" title="Fale Conosco">Fale Conosco</a></li>

      </ul>

    </div>

  </footer> */}

    </>
  )
}

export default Login;
