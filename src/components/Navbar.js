import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-gray-200 py-4 flex items-center justify-between">
      <div className="text-xl font-semibold px-4">UjangSans</div>
      <div className="flex">
        <Link className="mr-5" to="/">
          Home
        </Link>
        <Link className="mr-5" to="/about">
          About
        </Link>
        <Link className="mr-5" to="/">
          Project
        </Link>
      </div>
    </header>
  );
}
