import { useState } from 'react'
import CartButton from './CartButton'

function Header({ totalItems }) {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-slate-900 text-white shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-cyan-400">
          Se Vende Hielo
        </h1>

        <nav className="hidden md:flex gap-6 font-medium">

          <a href="#" className="hover:text-cyan-400 transition">
            Inicio
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Productos
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Contacto
          </a>

        </nav>

        <div className="hidden md:block">
          <CartButton totalItems={totalItems} />
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {menuOpen && (

        <div className="md:hidden bg-slate-800 px-6 py-4 flex flex-col gap-4">

          <a href="#" className="hover:text-cyan-400 transition">
            Inicio
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Productos
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Contacto
          </a>

          <CartButton totalItems={totalItems} />

        </div>

      )}

    </header>
  )
}

export default Header