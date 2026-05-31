import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Producto from './pages/Producto'

import RegistroTipo from './pages/RegistroTipo'
import RegistroNegocio from './pages/RegistroNegocio'
import RegistroConsumidor from './pages/RegistroConsumidor'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/producto" element={<Producto />} />

      <Route path="/registro" element={<RegistroTipo />} />
      <Route path="/registro-negocio" element={<RegistroNegocio />} />
      <Route path="/registro-consumidor" element={<RegistroConsumidor />} />
    </Routes>
  )
}

export default App