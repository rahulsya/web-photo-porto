import React from "react";

export default function filterPhotos({ context }) {
  const { handleChange, photos, type } = context;
  let categories = [...new Set(photos.map((item) => item.type))];
  categories = ["all", ...categories];
  return (
    <div className="top-0">
      <div className="font-semibold text-gray-800">
        Filter Photo By Categories
      </div>
      <span className="text-sm text-gray-700 capitalize">
        " Click tags below "
      </span>
      <div className="pr-6 pt-4 pb-2">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className={`inline-block 
                        ${
                          category === type
                            ? "bg-green-400 text-gray-900"
                            : "bg-gray-200"
                        }
                        rounded-full 
                        px-6 
                        py-3 
                        text-md 
                        font-semibold 
                        text-gray-700 mr-2 mb-2
                        text-center`}
              name="type"
              value={category}
              onClick={handleChange}
            >
              #{category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
