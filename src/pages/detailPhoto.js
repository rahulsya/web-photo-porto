import React, { Component } from "react";
import { PhotoContext } from "../Context/Context";

export default class detailPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.id,
    };
  }

  static contextType = PhotoContext;

  render() {
    const { getPhoto } = this.context;
    const photo = getPhoto(this.state.slug);

    if (!photo) {
      return (
        <div className="lg:container lg:mx-auto lg:px-32 px-4">
          <div className="text-2xl">Photo Not found</div>
        </div>
      );
    }

    return (
      <div className="lg:container lg:mx-auto lg:px-32 px-4">
        {/* section atas */}
        <div className="text-2xl">{photo.name}</div>
      </div>
    );
  }
}
