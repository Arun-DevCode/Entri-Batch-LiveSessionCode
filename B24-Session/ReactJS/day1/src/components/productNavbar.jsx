import { ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">ShopHub</h1>
        <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            0
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
