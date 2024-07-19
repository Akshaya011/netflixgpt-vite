import React from 'react'
import { IMG_CDNURL } from '../Utils/constants';

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-48 pr-4'>
      <img src={IMG_CDNURL+poster_path} alt="image" />
    </div>
  )
}

export default MovieCard;
