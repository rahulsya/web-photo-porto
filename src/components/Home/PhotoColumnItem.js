import React from "react";
import PhotoItems from "./PhotoItems";

export default function PhotoColumnItem({ photo }) {
  const { photoCol1, photoCol2, photoCol3 } = photo;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">
      <div className="flex flex-col">
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
      </div>
    </div>
  );
}
