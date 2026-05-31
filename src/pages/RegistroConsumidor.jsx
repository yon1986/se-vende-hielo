function RegistroConsumidor() {
    return (
      <div className="h-screen overflow-y-auto bg-white p-6">
        <h1 className="text-2xl font-bold mb-6">
          Registro Consumidor Final
        </h1>
  
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border p-3 rounded-lg"
          />
  
          <input
            type="text"
            placeholder="Apellido"
            className="w-full border p-3 rounded-lg"
          />
  
          <input
            type="tel"
            placeholder="Teléfono"
            className="w-full border p-3 rounded-lg"
          />
  
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border p-3 rounded-lg"
          />
  
          <input
            type="text"
            placeholder="Dirección exacta de entrega"
            className="w-full border p-3 rounded-lg"
          />
  
          <input
            type="text"
            placeholder="NIT para facturación"
            className="w-full border p-3 rounded-lg"
          />
  
          <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
            Usar mi ubicación actual
          </button>
  
          <button className="w-full bg-green-600 text-white py-3 rounded-xl">
            Registrarme
          </button>
        </div>
      </div>
    )
  }
  
  export default RegistroConsumidor