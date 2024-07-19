import React from "react";
import Header from "./Header";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import {useNowPlayingMovies} from '../hooks/useNowPlayingMovies.jsx'
import { usePopularMovies } from "../hooks/usePopularMovies.jsx";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies.jsx";
const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  return (
    <div >
      <Header />
      <MainComponent />
      <SecondaryComponent />
    </div>
  );
};

export default Browse;
