import ProductCard from './ProductCard'

import hielo3 from '../assets/productos/hielo3.png'
import hielo5 from '../assets/productos/hielo5.png'
import hielo10 from '../assets/productos/hielo10.png'

function ProductList({ onAddToCart }) {

  const productos = [
    {
      id: 1,
      nombre: 'Bolsa 3 lb',
      precio: 'Q7.50',
      imagen: hielo3
    },

    {
      id: 2,
      nombre: 'Bolsa 5 lb',
      precio: 'Q10.00',
      imagen: hielo5
    },

    {
      id: 3,
      nombre: 'Bolsa 10 lb',
      precio: 'Q17.50',
      imagen: hielo10
    }
  ]

  return (
    <section className="bg-slate-900 py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-black text-white text-center mb-14">
          Nuestros Productos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {productos.map((producto) => (
            <ProductCard
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              onAddToCart={onAddToCart}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default ProductList