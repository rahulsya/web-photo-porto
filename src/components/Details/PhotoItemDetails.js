import React from "react";

export default function PhotoItemDetails({ image }) {
  return (
    <div className="mb-4">
      <img src={image} className="w-full" alt={image} />
    </div>
  );
}
