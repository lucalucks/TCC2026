
import { Link } from 'react-router-dom'
import './Planos.css'

const planos = [
  {
    nome: 'Básico',
    preco: '79,90',
    descricao: 'O essencial para começar sua jornada.',
    beneficios: [
      'Acesso à musculação',
      'Uso dos equipamentos',
      'Orientação inicial',
    ],
  },
  {
    nome: 'Plus',
    preco: '99,90',
    descricao: 'Mais possibilidades para sua rotina.',
    beneficios: [
      'Tudo do plano Básico',
      'Aulas coletivas',
      'Acompanhamento da evolução',
    ],
    destaque: true,
  },
  {
    nome: 'Premium',
    preco: '129,90',
    descricao: 'Uma experiência mais completa.',
    beneficios: [
      'Tudo do plano Plus',
      'Agendamento de aulas',
      'Acesso à área do aluno',
    ],
  },
]

function Planos() {
  return (
    <main className="pagina-planos">
      <header className="planos-header">
        <Link className="logo" to="/">
          VITALIS<span>.</span>
        </Link>

        <Link className="voltar-inicio" to="/">
          ← VOLTAR AO INÍCIO
        </Link>
      </header>

      <section className="planos-intro">
        <span className="section-label">PLANOS VITALIS</span>

        <h1>
          O seu próximo passo
          <br />
          começa aqui.
        </h1>

        <p>
          Encontre o plano ideal para sua rotina e
          descubra novas possibilidades para treinar.
        </p>
      </section>

      <section className="planos-grid">
        {planos.map((plano) => (
          <article
            className={`plano-card ${
              plano.destaque ? 'plano-destaque' : ''
            }`}
            key={plano.nome}
          >
            {plano.destaque && (
              <span className="plano-selo">
                MAIS ESCOLHIDO
              </span>
            )}

            <div className="plano-conteudo">
              <span className="plano-categoria">
                PLANO VITALIS
              </span>

              <h2>{plano.nome}</h2>

              <p className="plano-descricao">
                {plano.descricao}
              </p>

              <div className="plano-preco">
                <span className="preco-moeda">R$</span>
                <span className="preco-valor">{plano.preco}</span>
                <span className="preco-periodo">/mês</span>
              </div>

              <div className="plano-divisor" />

              <p className="plano-beneficios-titulo">
                O QUE ESTÁ INCLUÍDO
              </p>

              <ul>
                {plano.beneficios.map((beneficio) => (
                  <li key={beneficio}>
                    <span className="beneficio-check">✓</span>
                    {beneficio}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              className="plano-botao"
              to={`/contato?plano=${encodeURIComponent(plano.nome)}`}
            >
              ESCOLHER PLANO
              <span aria-hidden="true"> →</span>
            </Link>
          </article>
        ))}
      </section>

      <p className="planos-aviso">
        Valores e benefícios ilustrativos para este projeto.
      </p>

      <footer className="planos-footer">
        <Link className="logo" to="/">
          VITALIS<span>.</span>
        </Link>

        <p>SEU RITMO. SUA EVOLUÇÃO.</p>
      </footer>
    </main>
  )
}

export default Planos
