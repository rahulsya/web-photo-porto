import React from "react";
import PhotoItems from "./PhotoItems";

export default function PhotoColumnItem({ photo }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">
      {photo.map((data, index) => {
        return (
          <div key={index} className="flex flex-col">
            {data.map((photo) => {
              return <PhotoItems key={photo.id} photo={photo} />;
            })}
          </div>
        );
      })}

      {/* <div className="flex flex-col">
        {photoCol1.map((photo) => {
          return <PhotoItems key={photo.id} photo={photo} />;
        })}
      </div>
      <div className="flex flex-col">
        {photoCol2.map((photo) => {
          return <PhotoItems key={photo.id} photo={photo} />;
        })}
      </div>
      <div className="flex flex-col">
        {photoCol3.map((photo) => {
          return <PhotoItems key={photo.id} photo={photo} />;
        })}
      </div> */}
    </div>
  );
}
