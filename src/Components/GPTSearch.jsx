import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { bg_loginimg } from '../Utils/constants'

const GPTSearch = () => {
  return (
    <div>
      <img
        className="left-0 absolute -z-10"
        src={bg_loginimg}
        alt="img not found"
      />
      <GPTSearchBar/>
      <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearch
