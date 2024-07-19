import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryComponent = () => {
  const movies = useSelector((store)=>store.movies)
  return (
    <div className=' bg-black'>
      <div className='-mt-52 relative z-5'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      {/* <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/> */}
      </div>
    </div>
  )
}

export default SecondaryComponent
