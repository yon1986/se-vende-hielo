function CartButton({ totalItems }) {
    return (
      <button className="relative bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded-xl font-semibold transition">
        🛒 Carrito
  
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-cyan-600 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow">
            {totalItems}
          </span>
        )}
      </button>
    )
  }
  
  export default CartButton