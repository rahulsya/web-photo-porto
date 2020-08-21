import React, { Component } from "react";
// import ItemPhoto from "../data";
import Client from "../contenful";
// import PhotoItems from "../components/Home/PhotoItems";

const PhotoContext = React.createContext();

class PhotoProvider extends Component {
  state = {
    photos: [],
    shortedPhotos: [],
    type: "all",
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "photoGallery",
        // sorter
        order: "-sys.createdAt",
      });
      // console.log(response.items);
      let photos = this.formatData(response.items);

      this.setState({
        photos,
        shortedPhotos: photos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let photo = { ...item.fields, images, id };

      return photo;
    });
    return tempItems;
  }

  getPhoto = (slug) => {
    let tempPhoto = [...this.state.photos];
    const photo = tempPhoto.find((photo) => photo.slug === slug);
    return photo;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filtersPhoto
    );
  };

  filtersPhoto = () => {
    let { photos, type } = this.state;

    let tempPhoto = [...photos];

    if (type !== "all") {
      tempPhoto = tempPhoto.filter((photoItem) => photoItem.type === type);
    }

    this.setState({
      shortedPhotos: tempPhoto,
    });
  };

  render() {
    return (
      <PhotoContext.Provider
        value={{
          ...this.state,
          getPhoto: this.getPhoto,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </PhotoContext.Provider>
    );
  }
}
export { PhotoContext, PhotoProvider };
