import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-4 flex justify-between">
      <Link href="/" className="font-bold text-xl">🛍️ E-Shop</Link>
      <div className="flex gap-4">
        <Link href="/cart">Cart</Link>
        <button onClick={toggle}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
