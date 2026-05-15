
import "./App.css"
import Logo from "./assets/logo.png"
import Banner from "./assets/hero.png"
import Cima from "./assets/cima.png"
import Baixo from "./assets/baixo.png"
function App(){
  return(
    <main>
      <header>
        <img src={Logo} alt="" />
        <p>Início</p>
        <p>Sobre</p>
        <p>Em destaque</p>
        <p>Cardápio</p>
        <p>Contato</p>
        <button className="fazer">Fazer pedido</button>
      </header>
      <section className="hero">
        <div className="s1">
          <h2><span>Cada bolo conta uma história. </span>
            Doces feitos com carinho, ingredientes selecionados e o sabor afetivo de receitas de família.</h2>
            <div className="botoes-hero">
              <button className="ver">Ver cardápio</button>
          <button className="destaque">Em destaque</button>
            </div>
        </div>
        <div className="s2">
          <img src={Banner} alt="" />          
        </div>
      </section>
      <section className="sobre">
        <img src={Cima} alt="" />
      </section>
    </main>
  )
}
export default App