import ImgsViewer from "react-images-viewer";
import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="lg:container lg:mx-auto lg:px-32 px-4">
        <div className="text-2xl font-bold mt-5">Project</div>
        <div className="font-semibold text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          quibusdam quod esse eius ea error nostrum hic quae saepe natus.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">
          <div className="flex flex-col">
            <div className="h-auto mb-4">
              <span className="absolute font-semibold text-white text-2xl px-3">
                Mercusuar
              </span>
            </div>

            <div className="h-auto mb-4">
              <span className="absolute font-semibold text-white text-2xl px-3">
                Cyber Punk Girl
              </span>
              <img
                src="https://source.unsplash.com/atfJ7CG0Wx4/900x1200"
                className="w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
