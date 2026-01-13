import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product._id}`} className="group">
      <div className="bg-[#F3F4F6] rounded-3xl p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">

        <div className="bg-white rounded-2xl p-4 flex justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-40 object-contain transition duration-300 group-hover:scale-110"
          />
        </div>

        <h3 className="mt-4 font-semibold text-black truncate">
          {product.name}
        </h3>

        <p className="text-black font-bold mt-1">₹{product.price}</p>

        <button className="w-full mt-4 bg-black text-white py-2 rounded-xl hover:opacity-90 transition">
          View Product
        </button>
      </div>
    </Link>
  );
}