import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#F3F4F6] min-h-screen">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-black leading-tight">
          Premium Products.<br/>Modern Lifestyle.
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Discover hand-picked products that define your style & comfort.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <Link to="/products" className="bg-black text-white px-10 py-4 rounded-xl hover:scale-105 transition">
            Shop Now
          </Link>
          <Link to="/products" className="border border-black px-10 py-4 rounded-xl hover:bg-black hover:text-white transition">
            Browse
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-8">
        {["Fashion","Electronics","Accessories"].map(c => (
          <div key={c} className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition">
            <h3 className="text-xl font-bold">{c}</h3>
            <p className="text-gray-500 mt-2">Explore premium {c}</p>
          </div>
        ))}
      </section>

    </div>
  );
}