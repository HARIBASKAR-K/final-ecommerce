import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/axios";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await API.get(`/products/${id}`);
        setProduct(data);
      } catch {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
  if (!product) return null;

  return (
    <div className="bg-[#F3F4F6] min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 grid md:grid-cols-2 gap-10 shadow-xl">

        <div className="flex justify-center items-center">
          <img src={product.image} className="h-80 object-contain" />
        </div>

        <div>
          <h1 className="text-4xl font-extrabold mb-4">{product.name}</h1>
          <p className="text-gray-500 mb-6">{product.description}</p>

          <p className="text-3xl font-bold mb-6">₹{product.price}</p>

          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-10 py-4 rounded-xl hover:opacity-90"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}