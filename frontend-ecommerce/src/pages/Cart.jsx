import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, updateQty } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="bg-[#F3F4F6] min-h-screen flex items-center justify-center">
        <div className="bg-white p-14 rounded-3xl text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven’t added anything yet.</p>
          <Link to="/products" className="bg-black text-white px-8 py-3 rounded-xl">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F3F4F6] min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Items */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-3xl font-extrabold mb-6">Shopping Cart</h1>

          {cartItems.map(item => (
            <div key={item._id} className="bg-white rounded-3xl p-6 flex items-center gap-6 shadow">
              <img src={item.image} className="h-28 object-contain" />

              <div className="flex-1">
                <h2 className="font-bold">{item.name}</h2>
                <p className="text-gray-500 mb-3">₹{item.price}</p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQty(item._id, Math.max(1, item.qty - 1))}
                    className="w-9 h-9 rounded-full border hover:bg-black hover:text-white transition">−</button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => updateQty(item._id, item.qty + 1)}
                    className="w-9 h-9 rounded-full border hover:bg-black hover:text-white transition">+</button>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold mb-2">₹{item.price * item.qty}</p>
                <button onClick={() => removeFromCart(item._id)} className="text-sm underline text-gray-500 hover:text-black">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-3xl p-8 h-fit sticky top-24 shadow-xl">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Delivery</span>
            <span className="text-green-600">Free</span>
          </div>

          <div className="border-t pt-4 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <Link
            to="/checkout"
            className="block text-center bg-black text-white py-4 rounded-xl mt-6 hover:opacity-90">
            Proceed to Checkout →
          </Link>
        </div>
      </div>
    </div>
  );
}