import React from "react";

export default function PhotoItemDetails({ detailPhoto }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 mt-5">
      {detailPhoto.map((photo, index) => {
        return (
          <div key={index} className="flex flex-col">
            {photo.map((item, index) => {
              return (
                <div key={index} className="mb-4">
                  <img src={item} alt={item} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
