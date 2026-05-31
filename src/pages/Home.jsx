import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="h-screen bg-cyan-500 flex flex-col justify-center items-center overflow-hidden px-6">

      <img
        src="/logo.png"
        alt="Logo Hielo"
        style={{
          width: '180px',
          height: '180px',
          objectFit: 'contain'
        }}
      />

      <button
        onClick={() => navigate('/catalogo')}
        style={{
          marginTop: '30px'
        }}
        className="bg-white text-cyan-600 px-10 py-4 rounded-2xl text-xl font-bold shadow-xl w-full max-w-xs"
      >
        Entrar sin registro
      </button>

      <button
        onClick={() => navigate('/registro')}
        className="mt-4 bg-cyan-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-xl w-full max-w-xs"
      >
        Registrarse para más beneficios
      </button>

    </div>
  )
}

export default Home