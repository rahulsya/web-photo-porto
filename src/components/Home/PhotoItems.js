import React from "react";
import { NavLink } from "react-router-dom";

import parser from "html-react-parser";

export default function PhotoItems({ photo }) {
  const { images, name, slug, description } = photo;
  if (photo.length === 0) {
    return (
      <div className="lg:container lg:mx-auto lg:px-32 px-4">
        <div className="text-2xl">No Items Photo</div>
      </div>
    );
  }
  return (
    <div className="mb-4 shadow-lg rounded-b-lg">
      <NavLink
        to={`/photo/${slug}`}
        className="font-semibold capitalize hover:underline"
      >
        <img src={images[0]} className="w-full" alt="" />
        <div className=" py-3 px-4">{name}</div>
      </NavLink>
      <div className="px-4 pb-3 text-justify">
        {parser(description.substring(0, 100))}...{" "}
      </div>
    </div>
  );
}
