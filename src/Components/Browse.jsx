import React from "react";
import Header from "./Header";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies.jsx";
import { usePopularMovies } from "../hooks/usePopularMovies.jsx";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies.jsx";
import GPTSearch from "./GPTSearch.jsx";
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainComponent />
          <SecondaryComponent />
        </>
      )}
    </div>
  );
};

export default Browse;
