import React, { Component } from "react";

import { PhotoContext } from "../Context/Context";
import { Fade } from "react-reveal";
import chunkPhotoItem from "../utils/chunkPhotoItem";

import PhotoContainer from "../components/Home/PhotoContainer";
import FilterPhotos from "../components/Home/filterPhotos";

export default class Home extends Component {
  // panggil static
  static contextType = PhotoContext;

  render() {
    const { shortedPhotos } = this.context;

    let tempDataPhoto = chunkPhotoItem(shortedPhotos, 3);

    return (
      <div className=" h-screen flex flex-col lg:flex-row w-full overflow-hidden">
        <div className="w-full lg:w-1/5">
          <Fade>
            <FilterPhotos context={this.context} />
          </Fade>
        </div>
        <div className="w-full lg:w-4/5 overflow-y-auto px-4 lg:px-12">
          <Fade>
            <PhotoContainer photo={tempDataPhoto} />
          </Fade>
        </div>
        {/* </div> */}
        {/* </Fade> */}
      </div>
    );
  }
}
