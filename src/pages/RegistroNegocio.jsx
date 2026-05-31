import { useNavigate } from 'react-router-dom'

function RegistroNegocio() {
  const navigate = useNavigate()

  return (
    <div className="h-screen overflow-y-auto bg-gray-50 p-5 pb-32">

      <button
        onClick={() => navigate('/registro')}
        className="mb-6 text-cyan-600 font-semibold"
      >
        ← Volver
      </button>

      <h1 className="text-3xl font-bold mb-6">
        Registro de Negocio
      </h1>

      <div className="bg-white rounded-2xl shadow-md p-5 mb-5">
        <h2 className="text-xl font-bold mb-4">
          Información del Negocio
        </h2>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Nombre del negocio"
            className="w-full border rounded-xl p-3"
          />

          <input
            type="text"
            placeholder="Razón social"
            className="w-full border rounded-xl p-3"
          />

          <input
            type="text"
            placeholder="NIT"
            className="w-full border rounded-xl p-3"
          />

          <input
            type="text"
            placeholder="Dirección del negocio"
            className="w-full border rounded-xl p-3"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-5 mb-5">
        <h2 className="text-xl font-bold mb-4">
          Persona de Contacto
        </h2>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border rounded-xl p-3"
          />

          <input
            type="text"
            placeholder="Apellido"
            className="w-full border rounded-xl p-3"
          />

          <input
            type="tel"
            placeholder="Teléfono"
            className="w-full border rounded-xl p-3"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border rounded-xl p-3"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-5 mb-5">
        <h2 className="text-xl font-bold mb-4">
          Fotografía del Negocio
        </h2>

        <input
          type="file"
          className="w-full border rounded-xl p-3"
        />
      </div>

      <div className="bg-white rounded-2xl shadow-md p-5 mb-5">
        <h2 className="text-xl font-bold mb-4">
          Ubicación
        </h2>

        <button
          type="button"
          className="w-full bg-blue-600 text-white py-3 rounded-xl"
        >
          📍 Usar mi ubicación actual
        </button>

        <p className="text-sm text-gray-500 mt-3">
          La ubicación GPS ayudará a mejorar las entregas.
        </p>
      </div>

      <button
        type="button"
        className="w-full bg-green-600 text-white py-4 rounded-2xl text-lg font-bold"
      >
        Registrarme
      </button>

    </div>
  )
}

export default RegistroNegocio