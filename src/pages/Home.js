import React, { Component } from "react";

import { PhotoContext } from "../Context/Context";
import { Fade } from "react-reveal";
import chunkPhotoItem from "../utils/chunkPhotoItem";

import PhotoColumnItem from "../components/Home/PhotoColumnItem";
import FilterPhotos from "../components/Home/filterPhotos";

export default class Home extends Component {
  // panggil static
  static contextType = PhotoContext;

  render() {
    const { shortedPhotos } = this.context;

    let tempDataPhoto = chunkPhotoItem(shortedPhotos, 3);

    return (
      <div className="lg:container lg:mx-auto px-4 lg:px-32 w-full">
        <Fade>
          <div className="text-2xl font-bold mt-5">My project </div>
          <div className="font-semibold text-sm mb-5 mt-4">
            Hello There, this all the project that I've worked on
          </div>
        </Fade>
        {/* grids */}
        <Fade>
          <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
            <div className="w-full lg:w-auto">
              <FilterPhotos context={this.context} />
            </div>
            <div className="w-full lg:w-3/4 pr-4 overflow-y-auto">
              <PhotoColumnItem photo={tempDataPhoto} />
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}
