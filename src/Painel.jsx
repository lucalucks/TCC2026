
import { Link, useParams } from 'react-router-dom'
import './Painel.css'

const paineis = {
  aluno: {
    titulo: 'Área do aluno',
    descricao: 'Acompanhe sua jornada e sua evolução na VITALIS.',
    itens: [
      {
        titulo: 'Meu plano',
        descricao: 'Consulte as informações do seu plano de academia.',
      },
      {
        titulo: 'Meus treinos',
        descricao: 'Organize seus treinos e acompanhe suas atividades.',
      },
      {
        titulo: 'Meu progresso',
        descricao: 'Visualize seus objetivos e sua evolução.',
      },
    ],
  },
  professor: {
    titulo: 'Painel do professor',
    descricao: 'Organize suas atividades e acompanhe seus alunos.',
    itens: [
      {
        titulo: 'Meus alunos',
        descricao: 'Consulte a área de acompanhamento dos alunos.',
      },
      {
        titulo: 'Treinos',
        descricao: 'Organize os treinos e as atividades planejadas.',
      },
      {
        titulo: 'Agenda',
        descricao: 'Acompanhe sua organização de horários.',
      },
    ],
  },
  administrador: {
    titulo: 'Painel administrativo',
    descricao: 'Acompanhe as principais áreas de gestão da VITALIS.',
    itens: [
      {
        titulo: 'Alunos',
        descricao: 'Área de consulta e organização dos alunos.',
      },
      {
        titulo: 'Equipe',
        descricao: 'Área de organização dos professores e colaboradores.',
      },
      {
        titulo: 'Planos',
        descricao: 'Consulte e organize os planos oferecidos pela academia.',
      },
    ],
  },
}

function Painel() {
  const { tipo } = useParams()
  const painel = paineis[tipo]

  if (!painel) {
    return (
      <main className="painel-page">
        <section className="painel-container">
          <h1>Painel não encontrado</h1>
          <Link to="/login" className="painel-button">
            Voltar ao login
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="painel-page">
      <header className="painel-header">
        <Link to="/" className="painel-logo">
          VITALIS<span>.</span>
        </Link>

        <Link to="/login" className="painel-sair">
          Sair
        </Link>
      </header>

      <section className="painel-container">
        <span className="painel-etiqueta">ÁREA EXCLUSIVA</span>
        <h1>{painel.titulo}</h1>
        <p className="painel-descricao">{painel.descricao}</p>

        <div className="painel-grid">
          {painel.itens.map((item) => (
            <article className="painel-card" key={item.titulo}>
              <div className="painel-card-icon">
                {tipo === 'aluno'
                  ? '✦'
                  : tipo === 'professor'
                    ? '✚'
                    : '◆'}
              </div>

              <h2>{item.titulo}</h2>
              <p>{item.descricao}</p>
              <span className="painel-em-breve">
                Área disponível para apresentação
              </span>
            </article>
          ))}
        </div>

        <Link to="/" className="painel-voltar">
          ← Voltar para a página inicial
        </Link>
      </section>

      <footer className="painel-footer">
        VITALIS FITNESS · SUA EVOLUÇÃO COMEÇA AQUI
      </footer>
    </main>
  )
}

export default Painel
