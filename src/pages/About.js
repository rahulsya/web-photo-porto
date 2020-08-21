import React from "react";
import Footer from "../components/Footer";
export default function About() {
  return (
    <>
      <div className="lg:container lg:mx-auto lg:px-32 px-4 mt-32 h-screen">
        <div className="flex flex-row shadow-lg rounded-lg w-full text-2xl items-center">
          <div className="w-40 h-40 p-2 rounded">
            <img
              classname="rounded-lg shadow-lg antialiased"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="profile"
            />
          </div>
          <div className="px-4 py-2 font-semibold flex flex-col text-gray-700">
            <span>Contact Me On</span>
            <span className="text-blue-400 underline">
              <a href="mailto:darwinantariksa@gmail.com">
                {" "}
                darwinantariksa@gmail.com
              </a>
            </span>
            <span className="text-red-400 underline">
              Instagram{" : "}
              <a href="https://www.instagram.com/ujang.sans/">
                Darwin Antariksa
              </a>
            </span>
            <span className="text-red-900 underline">
              Youtube {" : "}
              <a href="https://www.youtube.com/channel/UCcYac4UECK5VlaWLRLWeUnw">
                New Waves Collective
              </a>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
