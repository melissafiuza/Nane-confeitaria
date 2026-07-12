import { useState } from "react";
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

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

/* ── Ícones (SVG, sem emoji) ── */
const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);
const IconCamera = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const IconMessage = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
  </svg>
);
const IconWhatsapp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.285 7.047L.787 23.462l4.522-1.448C7.06 23.31 9.459 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-2.323 0-4.48-.7-6.269-1.894l-.449-.267-3.148 1.007 1.023-3.076-.293-.477C1.614 15.578 1 13.87 1 12 1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11z" />
  </svg>
);
const IconStar = ({ filled }) => (
  <svg viewBox="0 0 24 24" fill={filled ? "#E8B44C" : "none"} stroke="#E8B44C" strokeWidth="1.5" width="16" height="16">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconQuote = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.17 17.87c-1.2 0-2.2-.4-3-1.2-.8-.8-1.2-1.87-1.2-3.2 0-1.53.4-3 1.2-4.4.8-1.47 2.07-2.8 3.8-4l1.87 1.73c-1.13.87-2 1.73-2.6 2.6-.53.8-.87 1.53-1 2.2.2-.07.47-.1.8-.1 1.07 0 1.93.33 2.6 1 .67.67 1 1.53 1 2.6 0 1.13-.4 2.07-1.2 2.8-.73.6-1.6.97-2.27.97Zm10 0c-1.2 0-2.2-.4-3-1.2-.8-.8-1.2-1.87-1.2-3.2 0-1.53.4-3 1.2-4.4.8-1.47 2.07-2.8 3.8-4l1.87 1.73c-1.13.87-2 1.73-2.6 2.6-.53.8-.87 1.53-1 2.2.2-.07.47-.1.8-.1 1.07 0 1.93.33 2.6 1 .67.67 1 1.53 1 2.6 0 1.13-.4 2.07-1.2 2.8-.73.6-1.6.97-2.27.97Z" />
  </svg>
);

/* ── Dados: substitua pelos depoimentos reais dos seus clientes ── */
const depoimentos = [
  {
    nome: "Melissa Fiuza",
    texto: "Melhor bolo que já comi! Atendimento impecável e super atenciosa. Recomendo de olhos fechados.",
    estrelas: 5,
  },
  {
    nome: "Rafaela Mesquita",
    texto: "Encomendei os doces para o meu casamento e foi a melhor decisão. Atendimento atencioso do início ao fim.",
    estrelas: 5,
  },
  {
    nome: "Carolina Neves",
    texto: "Sabor de receita de família mesmo! Peço toda semana o brigadeiro gourmet, nunca decepciona.",
    estrelas: 5,
  },
  {
    nome: "Thays Costa",
    texto: "Super recomendo! O bolo de noivado surpreendeu todos os convidados, tanto no visual quanto no sabor.",
    estrelas: 5,
  },
];

const destaques = [
  { img: DiaDasMaes, alt: "Bolo tema Dia das Mães" },
  { img: PapelArroz, alt: "Bolo decorado com papel arroz" },
  { img: Xicara, alt: "Doce em formato de xícara" },
  { img: Abelha, alt: "Bolo tema abelhinha" },
  { img: Revelação, alt: "Bolo de revelação" },
  { img: Escrito, alt: "Bolo personalizado com escrita" },
];

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

      <section id="destaque" className="destaque-container">
        <h1>Em destaque</h1>
        <p>Nossas principais criações</p>
        <div className="instagram-grid">
          {destaques.map((item, i) => (
            <a
              key={i}
              className="instagram-grid-item"
              href="https://instagram.com/tianane_confeitaria"
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.img} alt={item.alt} />
              <span className="instagram-grid-overlay">
                <IconCamera />
              </span>
            </a>
          ))}
        </div>
        <p className="veja">
          Veja mais criações como essas em nosso instagram<br /><br />
          <a
            href="https://instagram.com/tianane_confeitaria"
            target="_blank"
            rel="noreferrer"
            className="veja-link"
          >
            @tianane_confeitaria
          </a>
        </p>
      </section>

      <section id="depoimentos" className="depoimentos-container">
        <h1>Depoimentos</h1>
        <p className="dep-subtitulo">O que nossos clientes dizem</p>
        <div className="depoimentos-grid">
          {depoimentos.map((dep, i) => (
            <div className="dep-card" key={i}>
              <span className="dep-quote"><IconQuote /></span>
              <div className="dep-estrelas">
                {Array.from({ length: 5 }).map((_, j) => (
                  <IconStar key={j} filled={j < dep.estrelas} />
                ))}
              </div>
              <p className="dep-texto">“{dep.texto}”</p>
              <p className="dep-nome">{dep.nome}</p>
            </div>
          ))}
        </div>
        <p className="carrossel-dica">← arraste para o lado para ver mais →</p>
      </section>

      <section id="contato" className="contato-container">
        <div className="contato-inner">
          <div className="contato-info">
            <h1 className="contato-titulo">Faça sua encomenda</h1>
            <div className="info-item">
              <span className="info-icon"><IconPin /></span>
              <div>
                <p className="info-label">Localização</p>
                <p className="info-valor">ZS · São Paulo</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><IconPhone /></span>
              <div>
                <p className="info-label">Whatsapp</p>
                <p className="info-valor">11-95275-2921</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><IconCamera /></span>
              <div>
                <p className="info-label">Instagram</p>
                <p className="info-valor">
                  <a className="info-link" href="https://instagram.com/tianane_confeitaria" target="_blank" rel="noreferrer">
                    @tianane_confeitaria
                  </a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><IconClock /></span>
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
              <IconWhatsapp /> Chamar no WhatsApp
            </a>
          </div>
          <div className="contato-form">
            <h2 className="form-titulo">Envie uma mensagem</h2>
            <form onSubmit={handleEnviar} className="form">
              <div className="form-group">
                <label>Nome</label>
                <div className="input-wrap">
                  <IconUser />
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Whatsapp</label>
                <div className="input-wrap">
                  <IconPhone />
                  <input
                    type="tel"
                    placeholder="(11) 9 0000-0000"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Mensagem</label>
                <div className="input-wrap input-wrap-textarea">
                  <IconMessage />
                  <textarea
                    rows={5}
                    placeholder="Conte sobre seu pedido, tema, data..."
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn-enviar">Enviar mensagem</button>
            </form>
          </div>
        </div>
      </section>

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
            <p><IconPhone /> 11-95275-2921</p>
            <p><IconCamera /> @tianane_confeitaria</p>
            <p><IconPin /> ZS · São Paulo</p>
            <p><IconClock /> Seg – Sáb, 08h às 18h</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Tia Nane Confeitaria · Feito com 🩷</p>
        </div>
      </footer>

      <a
        href="https://wa.me/5511952752921"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        title="Chamar no WhatsApp"
      >
        <IconWhatsapp />
      </a>
    </main>
  )
}
export default App