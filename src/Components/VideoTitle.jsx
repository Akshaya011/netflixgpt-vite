import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-44 px-12 absolute text-white bg-gradient-to-r from-black">
      <div className="w-1/3 py-6 text-6xl font-bold ">{title}</div>
      <p className="w-1/3 py-6 text-lg wrap">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black py-2 px-4 mx-4 rounded-md font-bold hover:bg-opacity-80">
          ▶Play
        </button>
        <button className="bg-white text-black py-2 px-4 mx-4 rounded-md font-bold hover:bg-opacity-80">
          ℹ more info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
