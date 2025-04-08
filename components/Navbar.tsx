import Link from "next/link";
import React from "react";
import { revalidatePath } from "next/cache";

const Navbar = () => {
  const onClick = async () => {
    "use server";
    revalidatePath("/pokemon");
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">PokeNext</div>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/pokemon">Pokemon</Link>
          <button onClick={onClick} type="button" className="cursor-pointer">
            Revalidate Pokemon List
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
