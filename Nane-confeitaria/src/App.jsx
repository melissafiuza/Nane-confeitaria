import { useState, useEffect, useRef } from "react";
import "./App.css"
import Logo from "./assets/logo.png"
import Banner from "./assets/hero.png"
import Cima from "./assets/cima.png"
import Baixo from "./assets/baixo.png"
import Foto from "./assets/foto.png"
import DiaDasMaes from "./assets/diadasmaes.png"
import Abelha from "./assets/abelha.png"
import PapelArroz from "./assets/papelarroz.png"
import Revelação from "./assets/revelacao.png"
import Xicara from "./assets/xicara.png"
import Escrito from "./assets/escrito.png"
import D1 from "./assets/d1.png"
import D2 from "./assets/d2.png"
import D3 from "./assets/d3.png"
import D4 from "./assets/d4.png"


function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function App(){
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [mensagem, setMensagem] = useState("");
 
  function handleEnviar(e) {
    e.preventDefault();
    const texto = encodeURIComponent(
      `Olá, Tia Nane! Me chamo *${nome}*.\n\n${mensagem}`
    );
    window.open(`https://wa.me/5511952752921?text=${texto}`, "_blank");
  }
  return(
    <main>
      <header>
        <img src={Logo} alt="" />
        <p onClick={() => scrollTo("inicio")} style={{ cursor: "pointer" }}>Início</p>
        <p onClick={() => scrollTo("sobre")} style={{ cursor: "pointer" }}>Sobre</p>
        <p onClick={() => scrollTo("destaque")} style={{ cursor: "pointer" }}>Destaque</p>
        <p onClick={() => scrollTo("depoimentos")} style={{ cursor: "pointer" }}>Depoimentos</p>
        <button className="fazer" onClick={() => scrollTo("contato")}>Fazer pedido</button>
      </header>
      <section id="inicio" className="hero">
        <div className="s1">
          <h2>
            <span>Cada bolo conta uma história. </span>
            Doces feitos com carinho, ingredientes selecionados e o sabor afetivo de receitas de família.
          </h2>
        </div>
        <div className="s2">
          <img src={Banner} alt="" />
        </div>
      </section>
 
      {/* ── SOBRE ── */}
      <section id="sobre" className="sobre">
        <img src={Cima} alt="" />
        <h1>Nossa história</h1>
        <div className="sobre-div">
          <img src={Foto} alt="" />
          <p>
            A Tia Nane Confeitaria nasceu na cozinha de casa, do desejo de transformar momentos comuns em memórias doces. <br /><br />
            Hoje atendemos festas, casamentos e encomendas especiais. Sempre com o capricho de quem coloca o coração em cada detalhe.
          </p>
        </div>
        <img src={Baixo} alt="" />
      </section>
 
      {/* ── DESTAQUE ── */}
      <section id="destaque" className="destaque-container">
        <h1>Em destaque</h1>
        <p>Nossas principais criações</p>
        <div className="galeria">
          <div className="esquerda">
            <img src={DiaDasMaes} alt="Dia das mães" />
            <img src={PapelArroz} alt="Papel arroz" />
            <img src={Xicara} alt="Xícara" />
          </div>
          <div className="direita">
            <img src={Abelha} alt="Abelha" />
            <img src={Revelação} alt="Revelação" />
            <img src={Escrito} alt="Escrito" />
          </div>
        </div>
        <p className="veja">
          Veja mais criações como essas em nosso instagram<br /><br />
          <span>@tianane_confeitaria</span>
        </p>
      </section>
 
      {/* ── DEPOIMENTOS ── */}
      <section id="depoimentos" className="depoimentos-container">
        <h1>Depoimentos</h1>
        <p className="dep-subtitulo">O que nossos clientes dizem</p>
        <div className="depoimentos-grid">
        <img src={D1} alt="" />
        <img src={D2} alt="" />
        <img src={D3} alt="" />
        <img src={D4} alt="" />
        </div>
      </section>
 
      {/* ── CONTATO ── */}
      <section id="contato" className="contato-container">
        <div className="contato-inner">
          <div className="contato-info">
            <h1 className="contato-titulo">Faça sua encomenda</h1>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <p className="info-label">Localização</p>
                <p className="info-valor">ZS · São Paulo</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📱</span>
              <div>
                <p className="info-label">Whatsapp</p>
                <p className="info-valor">11-95275-2921</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📸</span>
              <div>
                <p className="info-label">Instagram</p>
                <p className="info-valor">@tianane_confeitaria</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">⏰</span>
              <div>
                <p className="info-label">Atendimento</p>
                <p className="info-valor">Seg – Sáb, 08h às 18h</p>
              </div>
            </div>
            <a
              href="https://wa.me/5511952752921"
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              💬 Chamar no WhatsApp
            </a>
          </div>
          <div className="contato-form">
            <h2 className="form-titulo">Envie uma mensagem</h2>
            <form onSubmit={handleEnviar} className="form">
              <div className="form-group">
                <label>Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Whatsapp</label>
                <input
                  type="tel"
                  placeholder="(11) 9 0000-0000"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Mensagem</label>
                <textarea
                  rows={5}
                  placeholder="Conte sobre seu pedido, tema, data..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn-enviar">Enviar mensagem</button>
            </form>
          </div>
        </div>
      </section>
 
      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-marca">
            <img src={Logo} alt="Tia Nane" className="footer-logo" />
            <p className="footer-slogan">Cada bolo conta uma história.</p>
          </div>
          <div className="footer-links">
            <p className="footer-titulo-col">Navegação</p>
            {["inicio", "sobre", "destaque", "depoimentos", "contato"].map((id) => (
              <p
                key={id}
                onClick={() => scrollTo(id)}
                className="footer-link"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </p>
            ))}
          </div>
          <div className="footer-contato">
            <p className="footer-titulo-col">Contato</p>
            <p>📱 11-95275-2921</p>
            <p>📸 @tianane_confeitaria</p>
            <p>📍 ZS · São Paulo</p>
            <p>⏰ Seg – Sáb, 08h às 18h</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Tia Nane Confeitaria · Feito com 🩷</p>
        </div>
      </footer>
 
      {/* WhatsApp flutuante */}
      <a
        href="https://wa.me/5511952752921"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        title="Chamar no WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.285 7.047L.787 23.462l4.522-1.448C7.06 23.31 9.459 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-2.323 0-4.48-.7-6.269-1.894l-.449-.267-3.148 1.007 1.023-3.076-.293-.477C1.614 15.578 1 13.87 1 12 1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11z" />
        </svg>
      </a>
    </main>
  )
}
export default App