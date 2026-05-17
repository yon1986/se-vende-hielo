import { useNavigate } from 'react-router-dom'

function Catalogo() {

  const navigate = useNavigate()

  const productos = [
    {
      id: 1,
      nombre: 'Bolsa 3 Libras',
      precio: 'Q7.50',
      imagen: '/hielo3.png',
    },
    {
      id: 2,
      nombre: 'Bolsa 5 Libras',
      precio: 'Q10.00',
      imagen: '/hielo5.png',
    },
    {
      id: 3,
      nombre: 'Bolsa 10 Libras',
      precio: 'Q17.50',
      imagen: '/hielo10.png',
    },
  ]

  return (
    <div className="h-screen bg-cyan-500 overflow-hidden flex flex-col">

      <div className="text-center pt-8">
        <h1 className="text-3xl font-bold text-white">
          Catálogo de Hielo
        </h1>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center gap-5 px-5">

        {productos.map((producto) => (

          <button
            key={producto.id}
            onClick={() => navigate('/producto')}
            className="w-full max-w-sm bg-white rounded-3xl shadow-2xl p-4 flex items-center gap-4 active:scale-95 transition duration-150"
          >

            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-24 h-24 object-contain"
            />

            <div className="flex-1 text-left">

              <h2 className="text-xl font-bold text-cyan-700">
                {producto.nombre}
              </h2>

              <p className="text-lg text-gray-600 mt-1">
                {producto.precio}
              </p>

              <p className="text-sm text-cyan-500 mt-2 font-semibold">
                Tocar para seleccionar
              </p>

            </div>

            <div className="text-3xl text-cyan-500 font-bold">
              →
            </div>

          </button>

        ))}

      </div>

    </div>
  )
}

export default Catalogo