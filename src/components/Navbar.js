import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-gray-200 py-3 ">
      <div className="flex items-center justify-between lg:container lg:mx-auto lg:px-16 px-1">
        <Link className="text-xl font-semibold px-4" to="/">
          DarwinAntariksa
        </Link>
        <div className="flex">
          <Link
            className="mr-5 bg-gray-800 p-2 rounded font-semibold"
            to="/about"
          >
            About Me
          </Link>
        </div>
      </div>
    </header>
  );
}
