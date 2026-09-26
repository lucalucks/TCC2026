 function App() {
  return(
    <div className="flex items-center justify-between px-8 py-5">
      <h1 className="text-md font-bold">Fitzone</h1>

      <div className="ml-auto flex "> 
        <a href="/" className="text-sm font-medium hover:opacity-70">Início</a>
      </div>
      <nav className="flex gap-8">
       
        <a href="/" className="text-sm font-medium hover:opacity-70">Planos</a>
        <a href="/" className="text-sm font-medium hover:opacity-70">Aulas</a>
        <a href="/" className="text-sm font-medium hover:opacity-70">Professores</a>
        <a href="/" className="text-sm font-medium hover:opacity-70">Sobre nós</a>
        <a href="/" className="text-sm font-medium hover:opacity-70">Entrar</a>
      </nav>
      <button className="rounded-full px-6 py-3 font-medium  bg-black text-white hover:bg-gray-800">Matricule-se</button>
    </div>
  )
}
export default App