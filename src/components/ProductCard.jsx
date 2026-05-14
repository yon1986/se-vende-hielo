import { useState } from 'react'

function ProductCard(props) {

  const [cantidad, setCantidad] = useState(0)

  function aumentar() {
    setCantidad(cantidad + 1)
    props.onAddToCart()
  }

  function disminuir() {

    if (cantidad > 0) {
      setCantidad(cantidad - 1)
    }

  }

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 w-full">

      {/* IMAGEN */}

      <div className="h-[250px] overflow-hidden">

        <img
          src={props.imagen}
          alt={props.nombre}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />

      </div>

      {/* CONTENIDO */}

      <div className="p-6">

        <h3 className="text-3xl font-black text-gray-800 mb-3">
          {props.nombre}
        </h3>

        <p className="text-sky-500 text-2xl font-bold mb-5">
          {props.precio}
        </p>

        {/* CONTADOR */}

        <div className="flex items-center justify-between gap-4 mb-5">

          <button
            onClick={disminuir}
            className="bg-gray-200 hover:bg-gray-300 w-14 h-14 rounded-2xl text-3xl font-bold transition"
          >
            -
          </button>

          <div className="text-3xl font-black text-gray-800">
            {cantidad}
          </div>

          <button
            onClick={aumentar}
            className="bg-sky-500 hover:bg-sky-600 text-white w-14 h-14 rounded-2xl text-3xl font-bold transition"
          >
            +
          </button>

        </div>

        <button
          className="bg-slate-900 hover:bg-slate-800 text-white w-full py-4 rounded-2xl font-bold text-lg transition"
        >

          Agregar al pedido

        </button>

      </div>

    </div>
  )
}

export default ProductCard