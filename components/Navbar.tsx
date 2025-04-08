import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">PokeNext</div>
        <div className="space-x-4">
          <Link
            href="/"
            className="text-white hover:text-blue-200 transition-colors"
          >
            Home
          </Link>
          <Link href="/pokemon">Pokemon</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
