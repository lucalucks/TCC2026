
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [tipo, setTipo] = useState('aluno')
  const [mensagem, setMensagem] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    if (!email.trim() || !senha.trim()) {
      setMensagem('Preencha seu e-mail e sua senha.')
      return
    }

    navigate(`/painel/${tipo}`)
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <Link to="/" className="login-back">
          ← Voltar ao início
        </Link>

        <h1>VITALIS</h1>
        <p className="login-subtitle">
          SUA EVOLUÇÃO COMEÇA AQUI
        </p>

        <h2>Bem-vindo de volta!</h2>

        <p className="login-description">
          Entre para acessar seu espaço na VITALIS.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              setMensagem('')
            }}
            required
          />

          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(event) => {
              setSenha(event.target.value)
              setMensagem('')
            }}
            required
          />

          <label htmlFor="tipo">Tipo de acesso</label>
          <select
            id="tipo"
            value={tipo}
            onChange={(event) => setTipo(event.target.value)}
          >
            <option value="aluno">Aluno</option>
            <option value="professor">Professor</option>
            <option value="administrador">Administrador</option>
          </select>

          <button type="submit">
            Entrar na minha conta
          </button>

          {mensagem && (
            <p className="login-message" role="status">
              {mensagem}
            </p>
          )}
        </form>

        <p className="login-footer">
          Acesso demonstrativo para apresentação da plataforma VITALIS.
        </p>
      </section>
    </main>
  )
}

export default Login
