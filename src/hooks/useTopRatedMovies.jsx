import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/movieSlice";
import { API_OPTIONS } from "../Utils/constants";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

// export default useNowPlayingMovies;