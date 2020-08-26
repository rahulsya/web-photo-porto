import React, { Component } from "react";
import { PhotoContext } from "../Context/Context";
import PhotoItemDetails from "../components/Details/PhotoItemDetails";
import PhotoContainer from "../components/Home/PhotoContainer";
import chunkPhotoItem from "../utils/chunkPhotoItem";
import Navbar from "../components/Navbar";

import { Fade } from "react-reveal";
import parser from "html-react-parser";

export default class detailPhoto extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      slug: this.props.match.params.id,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.slug !== this.props.match.params.id) {
      window.scrollTo({ top: 0, bottom: 0, behavior: "smooth" });
      this.setState({
        ...this.state,
        slug: this.props.match.params.id,
      });
    }
  }

  static contextType = PhotoContext;

  render() {
    const { getPhoto, photos } = this.context;
    const photo = getPhoto(this.state.slug);

    if (!photo) {
      return (
        <div className="lg:container lg:mx-auto lg:px-32 px-4">
          <div className="text-2xl">Photo Not found</div>
        </div>
      );
    }

    const { name, description, images } = photo;
    const [mainImg, secondImg, ...defaultImage] = images;

    // untuk component photo columntitem
    let tempDataPhoto = chunkPhotoItem(photos, 3);
    let detailPhoto = chunkPhotoItem(defaultImage, 2);
    // console.log(detailPhoto);
    return (
      <>
        <Navbar />
        <div className="lg:container lg:mx-auto lg:px-32 px-4 mt-10">
          {/* section atas */}
          <Fade>
            <div className="flex flex-row justify-between items-center">
              <div className="w-full md:w-1/2 mr-4">
                <div className="text-3xl font-bold capitalize mb-3">{name}</div>
                <div className="text-justify">{parser(description)}</div>
              </div>
              <div className="w-1/2 hidden md:block">
                <img src={mainImg} alt={mainImg} />
              </div>
            </div>
            {/* divide */}
            <div className="divide-y divide-gray-400">
              <div className="text-center py-2"></div>
              <div></div>
            </div>
            {/* end divide */}
            <div className="grid grid-cols-1">
              <img src={secondImg} alt={`secondImg-${secondImg}`} />
            </div>
            <PhotoItemDetails detailPhoto={detailPhoto} />

            {/* divide */}
            <div className="divide-y divide-gray-400">
              <div className="text-center font-semibold text-2xl py-2">
                Explore More
              </div>
              <div></div>
            </div>
            {/* end divide */}
          </Fade>
          <Fade delay={300}>
            <PhotoContainer photo={tempDataPhoto} />
          </Fade>
        </div>
      </>
    );
  }
}
