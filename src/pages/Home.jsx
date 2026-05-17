import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()

  return (
    <div className="h-screen bg-cyan-500 flex flex-col justify-center items-center overflow-hidden">

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
        className="bg-white text-cyan-600 px-10 py-4 rounded-2xl text-xl font-bold shadow-xl"
      >
        Entrar
      </button>

    </div>
  )
}

export default Home