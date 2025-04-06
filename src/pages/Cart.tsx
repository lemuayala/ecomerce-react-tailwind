import { useCart } from '../hooks/useCart';

export const Cart = () => {
  const { state, dispatch } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 py-32 px-4">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-3xl font-bold text-white">
            Tu <span className="text-teal-300">Carrito</span>
          </h2>
        </div>

        {state.items.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-gray-400">Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <ul className="divide-y divide-white/10">
              {state.items.map((item) => (
                <li
                  key={item.cartId}
                  className="p-6 flex justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="text-white font-medium">{item.name}</h3>
                      <p className="text-teal-300">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: item.cartId || '',
                      })
                    }
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            <div className="p-6 bg-gradient-to-r from-teal-500/30 to-purple-500/30">
              <div className="flex justify-between text-xl font-bold text-white">
                <span>Total:</span>
                {/* <span>${total}</span> */}
              </div>
              <button className="w-full mt-6 bg-gradient-to-r from-teal-400 to-purple-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity">
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
