"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-6 left-4 right-4 z-50 flex justify-between items-center text-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold hover:text-yellow-500 cursor-pointer transition-colors duration-300">
          AI.
        </span>
      </div>

      {/* Desktop navigation */}
      <ul className="hidden md:flex space-x-6 md:space-x-10 text-lg font-bold">
        {["about", "projects", "contact"].map((id, i) => (
          <li key={i} className="group relative cursor-pointer">
            <Link
              href={`#${id}`}
              className="text-white transition-colors duration-300 group-hover:text-yellow-500"
            >
              {id === "about" && "About Me"}
              {id === "projects" && "Projects"}
              {id === "contact" && "Contact"}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu (optional) */}
      <div className="md:hidden">
        {/* Space for burger menu */}
      </div>
    </nav>
  );
}
