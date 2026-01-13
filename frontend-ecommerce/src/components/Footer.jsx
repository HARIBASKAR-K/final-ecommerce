import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-10 mt-16" style={{ backgroundColor: "#1D1D1F", color: "#B3B3B5" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#B3B3B5" }}>Trendora</h2>
          <p style={{ color: "#B3B3B5" }}>
            Trendora is your go-to e-commerce store for premium quality products. Enjoy seamless shopping and fast delivery.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3" style={{ color: "#B3B3B5" }}>Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[#B3B3B5]">Home</Link></li>
            <li><Link to="/products" className="hover:text-[#B3B3B5]">Products</Link></li>
            <li><Link to="/cart" className="hover:text-[#B3B3B5]">Cart</Link></li>
            <li><Link to="/login" className="hover:text-[#B3B3B5]">Login</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3" style={{ color: "#B3B3B5" }}>Contact Us</h3>
          <p>Email: support@trendora.com</p>
          <p>Phone: +91 98765 43210</p>
          <p className="mt-2">© 2026 Trendora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}