import React, { Component } from "react";
import { PhotoContext } from "../Context/Context";

import PhotoItems from "../components/PhotoItems";

export default class Home extends Component {
  // panggil static
  static contextType = PhotoContext;

  render() {
    const { photoCol1, photoCol2, photoCol3 } = this.context;
    return (
      <div className="lg:container lg:mx-auto lg:px-32 px-4">
        <div className="text-2xl font-bold mt-5">My project </div>
        <div className="font-semibold text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          quibusdam quod esse eius ea error nostrum hic quae saepe natus.
        </div>
        {/* grids */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">
          {/* innergrid */}
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
          {/* end innergrid */}
        </div>
      </div>
    );
  }
}
