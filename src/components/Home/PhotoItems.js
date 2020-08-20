import React from "react";
import { NavLink } from "react-router-dom";
export default function PhotoItems({ photo }) {
  const { images, name, slug, description } = photo;
  return (
    <div className="mb-4 shadow-lg rounded-b-lg">
      <img src={images[0]} className="w-full" alt="" />
      <div className=" py-3 px-4">
        <NavLink
          to={`/photo/${slug}`}
          className="font-semibold capitalize hover:underline"
        >
          {name}
        </NavLink>
      </div>
      <div className="px-4 pb-3">{description.substring(0, 100)}... </div>
    </div>
  );
}
