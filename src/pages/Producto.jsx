import { useState } from 'react'

function Producto() {

  const [cantidad, setCantidad] = useState(1)

  const precio = 17.50

  const total = (precio * cantidad).toFixed(2)

  const aumentar = () => {
    setCantidad(cantidad + 1)
  }

  const disminuir = () => {

    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }

  }

  return (
    <div className="h-screen bg-cyan-500 overflow-hidden flex justify-center items-center px-5">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 flex flex-col items-center">

        <img
          src="/hielo10.png"
          alt="Bolsa de Hielo"
          className="w-52 mb-5"
        />

        <h1 className="text-3xl font-bold text-cyan-700 text-center">
          Bolsa 10 Libras
        </h1>

        <p className="text-2xl text-gray-700 mt-2">
          Q17.50 c/u
        </p>

        <div className="bg-cyan-100 px-6 py-3 rounded-2xl mt-5 mb-8">

          <p className="text-2xl font-bold text-cyan-700">
            Total: Q{total}
          </p>

        </div>

        <div className="flex items-center gap-8 mb-10">

          <button
            onClick={disminuir}
            className="w-16 h-16 bg-cyan-500 rounded-full text-white text-5xl font-bold shadow-lg active:scale-95 transition"
          >
            -
          </button>

          <span className="text-4xl font-bold text-gray-800">
            {cantidad}
          </span>

          <button
            onClick={aumentar}
            className="w-16 h-16 bg-cyan-500 rounded-full text-white text-5xl font-bold shadow-lg active:scale-95 transition"
          >
            +
          </button>

        </div>

        <button className="w-full bg-cyan-500 text-white text-2xl font-bold py-4 rounded-2xl shadow-xl active:scale-95 transition">
          Pedir
        </button>

      </div>

    </div>
  )
}

export default Producto