import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Producto from './pages/Producto'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/producto" element={<Producto />} />
    </Routes>
  )
}

export default App