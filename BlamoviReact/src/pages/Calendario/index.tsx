import "./style.css"

//imagens
import imgBanner from "../../assets/images/Banner2.svg"
// import imgCalendar from "../../assets/images/Calendar.svg"
import imgBookClub from "../../assets/images/book club.svg"
import imgCoracao from "../../assets/images/coração.svg"
import imgClassificacao14 from "../../assets/images/classificação 14.svg"
import imgSereia from "../../assets/images/sereia.svg"
import imgClassificacaoLivre from "../../assets/images/classificação Livre.svg"
import imgClassificacao12 from "../../assets/images/classificação 12.svg"
import imgHomemAranha from "../../assets/images/homem aranha.svg"
import imgNickeloden from "../../assets/images/nickeloden.svg"
import imgPlusMais from "../../assets/images/Plus.svg"


function Calendario() {
    return(
        <>
        <main id="main_Calendario">
  <section>
    <div className="bn1">
      <img src={imgBanner} alt="" />   
    </div>
    <div className="banner_inicio">
      {/* <img src={imgCalendar} alt="" /> */}
      <div>
        <h2>CALENDÁRIO COMPLETO 2023</h2>
      </div>
    </div>
  </section>
  <section>
    <h3>11 de Maio 2023</h3>
    <div className="card-calendario">
      <div>
        <img className="card1" src={imgBookClub} alt="" />
      </div>
      <div>
        <h4>Clube do Livro 2: O Próximo do Capítulo</h4>
        <p>Categoria: Comédia</p>
        <span>Dirigido por: Bill Holderman</span>
        <p>
          A sequência segue nossos quatro melhores amigos enquanto eles levam
          seu clube do livro para a Itália para a divertida viagem de garotas
          que nunca tiveram.
        </p>
      </div>
      <div className="lateral">
        <img className="img1" src={imgCoracao} alt="" />
        <p className="classificaçao">Classificação</p>
        <img
          className="img2"
          src={imgClassificacao14}
          alt=""
        />
      </div>
    </div>
    <h3>26 de Maio 2023</h3>
    <div className="card-calendario">
      <div>
        <img className="card1" src={imgSereia} alt="" />
      </div>
      <div>
        <h4>A Pequena Sereia</h4>
        <p>Categoria: Aventura . Familia . Fantasia</p>
        <span>Dirigido por: Rob Marshall</span>
        <p>
          Remake live action do clássico desenho animado "A Pequena Sereia", de
          1989, da Disney. Para conhecer um principe humano, uma sereia aceita
          ceder sua voz para que uma feiticeira lhe dê pernas. Agora, ela terá o
          desafio de se comunicar com o rapaz. A sinopse oficial ainda não foi
          divulgada
        </p>
      </div>
      <div className="lateral">
        <img className="img1" src={imgCoracao} alt="" />
        <p className="classificaçao">Classificação</p>
        <img
          className="img2"
          src={imgClassificacaoLivre}
          alt=""
        />
      </div>
    </div>
    <h3>01 de Junho 2023</h3>
    <div className="card-calendario">
      <div>
        <img
          className="card1"
          src={imgHomemAranha}
          alt=""
        />
      </div>
      <div>
        <h4>Homem-Aranha: Através do Aranhaverso</h4>
        <p>Categoria: Aventura . Animação . Ação</p>
        <span>Dirigido por: Joaquim dos Santos, Kemp Powers, Justin K.</span>
        <p>
          Depois de se reunir com Gwen Stacy, Homem-Aranha é pego através do
          Multiverso, onde ele encontra uma equipe de Pessoas-Aranha encarregada
          de proteger sua própria existência.
        </p>
      </div>
      <div className="lateral">
        <img className="img1" src={imgCoracao} alt="" />
        <p className="classificaçao">Classificação</p>
        <img
          className="img2"
          src={imgClassificacao12}
          alt=""
        />
      </div>
    </div>
    <h3>02 de Junho 2023</h3>
    <div className="card-calendario">
      <div>
        <img className="card1" src={imgNickeloden} alt="" />
      </div>
      <div>
        <h4>Blue's Big City Adventure</h4>
        <p>Categoria: Família . Fantasia</p>
        <span>Dirigido por: Rob Marshall</span>
        <p>
          A turma toda de Pistas de Blue está reunida nesta aventura musical
          especial com nossos queridos amiguinhos e os três apresentadores Josh,
          Steve e Joe se unem a Blue em uma aventura musical na cidade de Nova
          Iorque.
        </p>
      </div>
      <div className="lateral">
        <img className="img1" src={imgCoracao} alt="" />
        <p className="classificaçao">Classificação</p>
        <img
          className="img2"
          src={imgClassificacaoLivre}
          alt=""
        />
      </div>
    </div>
  </section>
  <div className="mais">
    <img className="btmais" src={imgPlusMais} alt="" />
  </div>
</main>

        </>
    )
}

export default Calendario