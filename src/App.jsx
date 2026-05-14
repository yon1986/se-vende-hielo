import { useState } from 'react'

import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import BottomNav from './components/BottomNav'

function App() {

  const [cartCount, setCartCount] = useState(0)

  function agregarAlCarrito() {
    setCartCount(cartCount + 1)
  }

  return (
    <div className="pb-28">

      <Header totalItems={cartCount} />

      <Hero />

      <ProductList onAddToCart={agregarAlCarrito} />

      <BottomNav />

    </div>
  )
}

export default App