
import { Link, useParams } from 'react-router-dom'
import './Professores.css'

const professores = [
  {
    id: 'gabriel-mendes',
    nome: 'Gabriel Mendes',
    especialidade: 'Musculação',
    descricao:
      'Foco em treinamento de força, execução dos exercícios e evolução gradual.',
    experiencia: 'Treinamento de força',
    imagem:
      'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'marina-alves',
    nome: 'Marina Alves',
    especialidade: 'Treinamento funcional',
    descricao:
      'Treinos dinâmicos para desenvolver mobilidade, equilíbrio e condicionamento.',
    experiencia: 'Mobilidade e condicionamento',
    imagem:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'lucas-ferreira',
    nome: 'Lucas Ferreira',
    especialidade: 'Condicionamento físico',
    descricao:
      'Atividades voltadas à resistência, disposição e melhora do desempenho físico.',
    experiencia: 'Resistência e desempenho',
    imagem:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'isabela-rocha',
    nome: 'Isabela Rocha',
    especialidade: 'Aulas coletivas',
    descricao:
      'Aulas animadas que combinam movimento, ritmo e motivação em grupo.',
    experiencia: 'Ritmo e movimento',
    imagem:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'rafael-costa',
    nome: 'Rafael Costa',
    especialidade: 'Hipertrofia',
    descricao:
      'Planejamento de treinos com foco em força, técnica e desenvolvimento muscular.',
    experiencia: 'Hipertrofia e força',
    imagem:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'beatriz-lima',
    nome: 'Beatriz Lima',
    especialidade: 'Pilates e mobilidade',
    descricao:
      'Exercícios voltados à consciência corporal, flexibilidade e controle dos movimentos.',
    experiencia: 'Flexibilidade e equilíbrio',
    imagem:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'pedro-henrique',
    nome: 'Pedro Henrique',
    especialidade: 'Treinamento esportivo',
    descricao:
      'Atividades para trabalhar agilidade, coordenação, velocidade e resistência.',
    experiencia: 'Agilidade e desempenho',
    imagem:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'camila-santos',
    nome: 'Camila Santos',
    especialidade: 'Condicionamento e bem-estar',
    descricao:
      'Treinos variados que ajudam a desenvolver hábitos ativos e uma rotina de exercícios.',
    experiencia: 'Condicionamento geral',
    imagem:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85',
  },
]

function Professores() {
  const { id } = useParams()

  const professor = professores.find(
    (item) => item.id === id,
  )

  if (id && !professor) {
    return (
      <main className="professores-page">
        <h1>Professor não encontrado</h1>
        <Link to="/professores" className="professores-button">
          VER TODOS OS PROFESSORES
        </Link>
      </main>
    )
  }

  return (
    <div className="professores-page">
      <header className="professores-header">
        <Link to="/" className="professores-logo">
          VITALIS<span>.</span>
        </Link>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/planos">Planos</Link>
          <Link to="/professores">Professores</Link>
          <Link to="/login">Área do aluno</Link>
        </nav>
      </header>

      {professor ? (
        <main className="professor-detalhe">
          <Link to="/professores" className="professores-voltar">
            ← VOLTAR AOS PROFESSORES
          </Link>

          <div className="professor-detalhe-card">
            <img
              src={professor.imagem}
              alt={professor.nome}
            />

            <div>
              <span className="professor-especialidade">
                {professor.especialidade}
              </span>

              <h1>{professor.nome}</h1>

              <p>{professor.descricao}</p>

              <h3>Área de atuação</h3>
              <p>{professor.experiencia}</p>

              <Link to="/planos" className="professores-button">
                CONHECER OS PLANOS
              </Link>
            </div>
          </div>
        </main>
      ) : (
        <main>
          <section className="professores-hero">
            <span>NOSSO TIME</span>
            <h1>
              Conheça nossos <strong>professores.</strong>
            </h1>
            <p>
              Profissionais para acompanhar você em diferentes
              modalidades e objetivos de treinamento.
            </p>
          </section>

          <section className="professores-grid">
            {professores.map((item) => (
              <article
                className="professor-card"
                key={item.id}
              >
                <Link
                  to={`/professores/${item.id}`}
                  className="professor-foto-link"
                  aria-label={`Conhecer ${item.nome}`}
                >
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    loading="lazy"
                  />
                </Link>

                <div className="professor-info">
                  <span className="professor-especialidade">
                    {item.especialidade}
                  </span>

                  <h2>{item.nome}</h2>
                  <p>{item.descricao}</p>

                  <Link
                    to={`/professores/${item.id}`}
                    className="professor-link"
                  >
                    CONHECER PROFESSOR →
                  </Link>
                </div>
              </article>
            ))}
          </section>

          <section className="professores-cta">
            <div>
              <h2>Encontre seu próximo desafio.</h2>
              <p>
                Conheça nossos planos e escolha como começar
                sua jornada na VITALIS.
              </p>
            </div>

            <Link to="/planos" className="professores-button">
              VER PLANOS
            </Link>
          </section>
        </main>
      )}

      <footer className="professores-footer">
        <Link to="/" className="professores-logo">
          VITALIS<span>.</span>
        </Link>
        <p>SEU RITMO. SUA EVOLUÇÃO.</p>
      </footer>
    </div>
  )
}

export default Professores
