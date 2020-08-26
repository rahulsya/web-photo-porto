import React from "react";

export default function filterPhotos({ context }) {
  const { handleChange, photos, type } = context;
  let categories = [...new Set(photos.map((item) => item.type))];
  categories = ["all", ...categories];
  return (
    <div className="">
      <div className="pr-6 pt-10 pb-2 flex flex-row lg:flex-col overflow-x-auto w-full">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className={`inline-block 
                        ${category === type ? "font-bold underline" : ""}
                        rounded-full 
                        px-6
                        lg:py-2 
                        text-sm
                        lg:text-md 
                        font-semibold 
                        text-gray-700 mr-2 lg:mb-2
                        text-left capitalize`}
              name="type"
              value={category}
              onClick={handleChange}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
