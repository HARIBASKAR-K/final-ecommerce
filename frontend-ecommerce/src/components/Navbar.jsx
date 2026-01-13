import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 py-3 flex items-center justify-between bg-[#F3F4F6] border-b border-black/10 backdrop-blur-md sticky top-0 z-50">
      
      {/* LOGO */}
      <Link to="/" className="text-lg md:text-xl font-bold tracking-wide text-black">
        Trendora
      </Link>

      {/* LINKS - Desktop */}
      <div className="hidden md:flex gap-6 items-center">
        <Link to="/" className="transition hover:text-[#B3B3B5] text-black">Home</Link>
        <Link to="/products" className="transition hover:text-[#B3B3B5] text-black">Products</Link>
        <Link to="/cart" className="transition font-semibold hover:text-[#B3B3B5] text-black">Cart</Link>
        <Link to="/login" className="transition hover:text-[#B3B3B5] text-black">Login</Link>
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-black text-xl">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE LINKS */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full flex flex-col items-center md:hidden gap-4 py-4 bg-[#F3F4F6] border-b border-black/10 shadow-lg z-50">
          <Link to="/" className="transition hover:text-[#B3B3B5] text-black" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" className="transition hover:text-[#B3B3B5] text-black" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/cart" className="transition font-semibold hover:text-[#B3B3B5] text-black" onClick={() => setIsOpen(false)}>Cart</Link>
          <Link to="/login" className="transition hover:text-[#B3B3B5] text-black" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
}