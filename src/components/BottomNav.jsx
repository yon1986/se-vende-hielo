function BottomNav() {
    return (
  
      <div className="fixed bottom-0 left-0 w-full bg-slate-900 border-t border-slate-700 md:hidden z-50">
  
        <div className="flex justify-around items-center py-4">
  
          <button className="flex flex-col items-center text-cyan-400 text-sm font-semibold">
  
            <span className="text-2xl mb-1">🏠</span>
            Inicio
  
          </button>
  
          <button className="flex flex-col items-center text-white text-sm">
  
            <span className="text-2xl mb-1">🧊</span>
            Productos
  
          </button>
  
          <button className="flex flex-col items-center text-white text-sm">
  
            <span className="text-2xl mb-1">📦</span>
            Pedidos
  
          </button>
  
          <button className="flex flex-col items-center text-white text-sm">
  
            <span className="text-2xl mb-1">👤</span>
            Perfil
  
          </button>
  
        </div>
  
      </div>
  
    )
  }
  
  export default BottomNav