
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Planos from './Planos'
import Professores from './Professores'
import Contato from './Contato'

const modalidades = [
  {
    nome: 'Musculação',
    descricao: 'Treine no seu ritmo e com acompanhamento.',
    imagem:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=85',
  },
  {
    nome: 'Treinamento funcional',
    descricao: 'Movimento, condicionamento e disposição.',
    imagem:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=85',
  },
  {
    nome: 'Aulas coletivas',
    descricao: 'Encontre uma atividade que combine com você.',
    imagem:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=85',
  },
]

function Inicio() {
  return (
    <>
      <header className="header">
        <Link className="logo" to="/">
          VITALIS<span>.</span>
        </Link>

        <nav className="menu">
          <Link to="/">Início</Link>
          <a href="#academia">A academia</a>
          <a href="#modalidades">Modalidades</a>
          <Link to="/professores">Professores</Link>
          <Link to="/planos">Planos</Link>
          <Link to="/contato">Fale conosco</Link>
        </nav>

        <Link className="header-button" to="/planos">
          MATRICULE-SE
        </Link>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-overlay" />

          <div className="hero-content">
            <span className="hero-tag">
              SEU NOVO MOMENTO COMEÇA AQUI
            </span>

            <h1>
              MAIS MOVIMENTO.
              <br />
              MAIS <span>VOCÊ.</span>
            </h1>

            <p>
              Uma academia completa para você treinar,
              evoluir e fazer parte de uma comunidade
              que não para.
            </p>

            <div className="hero-buttons">
              <Link className="button-blue" to="/planos">
                QUERO ME MATRICULAR
              </Link>

              <a className="button-outline" href="#modalidades">
                CONHEÇA A ACADEMIA
              </a>
            </div>
          </div>

          <div className="hero-bottom">
            <span>SEU OBJETIVO. SEU RITMO. SUA ACADEMIA.</span>
            <a href="#academia">DESCUBRA MAIS ↓</a>
          </div>
        </section>

        <section className="intro section" id="academia">
          <div>
            <span className="section-label">
              VITALIS FITNESS CLUB
            </span>

            <h2>
              Seu lugar para
              <br />
              <span>ir mais longe.</span>
            </h2>
          </div>

          <p>
            Mais do que treinar, queremos fazer parte da
            sua rotina. Aqui você encontra estrutura,
            modalidades variadas e espaço para construir
            seus próprios objetivos.
          </p>
        </section>

        <section className="modalities section" id="modalidades">
          <div className="section-heading">
            <div>
              <span className="section-label">
                ENCONTRE SEU RITMO
              </span>

              <h2>Tem espaço para todo mundo.</h2>
            </div>

            <Link to="/planos" className="text-link">
              VER PLANOS →
            </Link>
          </div>

          <div className="modality-grid">
            {modalidades.map((modalidade) => (
              <article
                className="modality-card"
                key={modalidade.nome}
              >
                <img
                  src={modalidade.imagem}
                  alt={`Atividade de ${modalidade.nome}`}
                  loading="lazy"
                />

                <div className="modality-info">
                  <h3>{modalidade.nome}</h3>
                  <p>{modalidade.descricao}</p>

                  <Link to="/planos">
                    SAIBA MAIS →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="membership">
          <div>
            <span className="section-label">
              CHEGOU A SUA VEZ
            </span>

            <h2>Vamos começar?</h2>

            <p>
              Escolha seu plano e dê o primeiro passo
              para fazer parte da VITALIS.
            </p>
          </div>

          <Link className="button-white" to="/planos">
            CONHECER OS PLANOS →
          </Link>
        </section>

        <section className="student-area section">
          <div>
            <span className="section-label">
              ATENDIMENTO VITALIS
            </span>

            <h2>Vamos encontrar o plano ideal para você?</h2>

            <p>
              Fale diretamente com nossa equipe pelo WhatsApp
              e tire suas dúvidas antes de escolher seu plano.
            </p>
          </div>

          <Link className="button-blue" to="/contato">
            FALAR COM UM ESPECIALISTA
          </Link>
        </section>
      </main>

      <footer className="footer">
        <Link className="logo" to="/">
          VITALIS<span>.</span>
        </Link>

        <p>SEU RITMO. SUA EVOLUÇÃO.</p>
      </footer>
    </>
  )
}

function App() {
  return (
    <div className="site">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/contato" element={<Contato />} />

        <Route
          path="/professores"
          element={<Professores />}
        />

        <Route
          path="/professores/:id"
          element={<Professores />}
        />

        <Route
          path="*"
          element={
            <main className="not-found">
              <h1>Página não encontrada</h1>

              <Link className="button-blue" to="/">
                VOLTAR AO INÍCIO
              </Link>
            </main>
          }
        />
      </Routes>
    </div>
  )
}

export default App
