import { useNavigate } from 'react-router-dom'

function RegistroTipo() {
  const navigate = useNavigate()

  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 bg-white">

      <h1 className="text-3xl font-bold mb-8 text-center">
        ¿Cómo deseas registrarte?
      </h1>

      <button
        onClick={() => navigate('/registro-negocio')}
        className="w-full max-w-sm bg-blue-600 text-white py-4 rounded-xl mb-4 text-lg font-semibold shadow-lg"
      >
        🏪 Registro de Negocio
      </button>

      <button
        onClick={() => navigate('/registro-consumidor')}
        className="w-full max-w-sm bg-green-600 text-white py-4 rounded-xl text-lg font-semibold shadow-lg"
      >
        👤 Consumidor Final
      </button>

    </div>
  )
}

export default RegistroTipo