
import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import './Contato.css'

const planos = {
  Básico: '79,90',
  Plus: '99,90',
  Premium: '129,90',
}

const WHATSAPP = '5534991529172'

function Contato() {
  const [searchParams] = useSearchParams()
  const planoInicial = searchParams.get('plano')

  const [plano, setPlano] = useState(
    Object.hasOwn(planos, planoInicial) ? planoInicial : 'Plus'
  )

  const [nome, setNome] = useState('')

  const mensagem = `Olá! Meu nome é ${nome.trim() || '[seu nome]'} e tenho interesse no plano ${plano} da VITALIS Fitness, no valor de R$ ${planos[plano]}/mês. Gostaria de conversar com um especialista sobre a matrícula. Poderia me ajudar com os próximos passos?`

  const linkWhatsApp = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`

  return (
    <main className="contato-page">
      <header className="contato-header">
        <Link className="contato-logo" to="/">
          VITALIS<span>.</span>
        </Link>

        <Link className="contato-voltar" to="/planos">
          ← VOLTAR AOS PLANOS
        </Link>
      </header>

      <section className="contato-container">
        <span className="contato-label">VAMOS COMEÇAR?</span>

        <h1>
          Sua próxima conquista
          <br />
          <span>COMECE AGORA.</span>
        </h1>

        <p className="contato-intro">
          Escolha seu plano e fale com um especialista da VITALIS
          para dar o primeiro passo.
        </p>

        <div className="contato-card">
          <label htmlFor="nome">Como podemos te chamar?</label>

          <input
            id="nome"
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            maxLength={80}
          />

          <label htmlFor="plano">Plano escolhido</label>

          <select
            id="plano"
            value={plano}
            onChange={(event) => setPlano(event.target.value)}
          >
            {Object.entries(planos).map(([nomePlano, preco]) => (
              <option key={nomePlano} value={nomePlano}>
                {nomePlano} — R$ {preco}/mês
              </option>
            ))}
          </select>

          <div className="contato-resumo">
            <span>SEU PLANO</span>
            <strong>{plano}</strong>
            <p>
              R$ {planos[plano]} <small>/mês</small>
            </p>
          </div>

          <div className="contato-mensagem">
            <span>MENSAGEM QUE SERÁ PREPARADA</span>
            <p>{mensagem}</p>
          </div>

          <a
            className="contato-whatsapp"
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">◉</span>
            CONVERSAR PELO WHATSAPP
            <span aria-hidden="true"> →</span>
          </a>

          <p className="contato-aviso">
            O WhatsApp abrirá com a mensagem preenchida. Revise e
            aperte Enviar para que o especialista receba seu contato.
          </p>
        </div>

        <Link className="contato-inicio" to="/">
          ← Voltar para a página inicial
        </Link>
      </section>

      <footer className="contato-footer">
        VITALIS FITNESS · SEU RITMO. SUA EVOLUÇÃO.
      </footer>
    </main>
  )
}

export default Contato
