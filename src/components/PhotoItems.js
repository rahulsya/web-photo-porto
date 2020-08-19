import React from "react";
import { Link } from "react-router-dom";
export default function PhotoItems({ photo }) {
  const { images, tags, name, slug, description } = photo;
  return (
    <div className="mb-4 shadow-lg rounded-b-lg">
      <img src={images[0]} className="w-full" alt="" />
      <div className=" py-3 px-4">
        <Link
          to={`photo/${slug}`}
          className="font-semibold capitalize hover:underline"
        >
          {name}
        </Link>
      </div>
      <div className="px-4 pb-3">{description.substring(0, 100)}... </div>
      {/* <div className="px-2 pb-2">
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              # {tag}
            </span>
          );
        })}
      </div> */}
    </div>
  );
}
