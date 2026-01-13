import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function MyOrders() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchOrders = async () => {
      try {
        setLoading(true);
        const { data } = await API.get("/orders/myorders");
        setOrders(data);
      } catch {
        setError("Failed to load orders. Please login again.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user, navigate]);

  if (loading) return <p className="text-center mt-20 text-xl">Loading your orders...</p>;
  if (error) return <p className="text-center mt-20 text-xl text-red-500">{error}</p>;

  return (
    <div className="bg-[#F3F4F6] min-h-screen px-6 py-14">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-10">My Orders</h1>

        {orders.length === 0 ? (
          <p className="text-center text-xl">You have not placed any orders yet.</p>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <div key={order._id} className="bg-white rounded-3xl p-6 shadow-md">
                <h2 className="text-xl font-bold mb-4">Order ID: {order._id}</h2>
                <p className="text-gray-600 mb-2">Total: ₹{order.totalPrice}</p>
                <p className="text-gray-600 mb-4">
                  Status: {order.isPaid ? "Paid" : "Pending Payment"}
                </p>

                <div className="border-t pt-4 space-y-2">
                  {order.orderItems.map(item => (
                    <div key={item._id} className="flex justify-between text-gray-700">
                      <span>{item.name} × {item.qty}</span>
                      <span>₹{item.price * item.qty}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}