import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const MainComponent = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  if (!movies || !movies[0]) return null;
  const mainMovie = movies[0];
  // console.log(+mainMovie);
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
        <div className="relative w-screen h-screen">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
      </div>
    </div>
  );
};

export default MainComponent;
