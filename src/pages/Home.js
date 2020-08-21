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

    let tempDataPhoto = chunkPhotoItem(shortedPhotos);

    return (
      <div className="lg:container lg:mx-auto lg:px-32 px-4 overflow-hidden w-full">
        <Fade>
          <div className="text-2xl font-bold mt-5">My project </div>
          <div className="font-semibold text-sm mb-5 mt-4">
            Hello There, this all the project that I've worked on
          </div>
          <FilterPhotos context={this.context} />
        </Fade>
        {/* grids */}
        <Fade>
          <PhotoColumnItem photo={tempDataPhoto} />
        </Fade>
      </div>
    );
  }
}
