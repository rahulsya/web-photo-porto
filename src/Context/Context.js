import React, { Component } from "react";
// import ItemPhoto from "../data";
import Client from "../contenful";

const PhotoContext = React.createContext();

class PhotoProvider extends Component {
  state = {
    photos: [],
    photoCol1: [],
    photoCol2: [],
    photoCol3: [],
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "photoGallery",
        // sorter
        order: "sys.createdAt",
      });
      console.log(response.items);
      let tempPhotos = this.formatData(response.items);
      let photos = this.formatData(response.items);

      const devidedData = Math.ceil(tempPhotos.length / 3);
      let photoCol1 = tempPhotos.splice(0, devidedData);
      let photoCol2 = tempPhotos.splice(0, devidedData);
      let photoCol3 = tempPhotos.splice(0, devidedData);

      this.setState({ photos, photoCol1, photoCol2, photoCol3 });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
    // let tempPhotos = this.formatData(ItemPhoto);
    // let photos = this.formatData(ItemPhoto);
    // const devidedData = Math.ceil(tempPhotos.length / 3);
    // let photoCol1 = tempPhotos.splice(0, devidedData);
    // let photoCol2 = tempPhotos.splice(0, devidedData);
    // let photoCol3 = tempPhotos.splice(0, devidedData);
    // this.setState({ photos, photoCol1, photoCol2, photoCol3 });
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

  render() {
    return (
      <PhotoContext.Provider value={{ ...this.state, getPhoto: this.getPhoto }}>
        {this.props.children}
      </PhotoContext.Provider>
    );
  }
}
export { PhotoContext, PhotoProvider };
