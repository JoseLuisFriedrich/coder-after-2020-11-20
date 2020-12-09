import './Detail.scss'
import { useEffect, useState } from 'react'

// adult: false
// backdrop_path: "/u9YEh2xVAPVTKoaMNlB5tH6pXkm.jpg"
// belongs_to_collection: null
// budget: 0
// genres: (4) [{…}, {…}, {…}, {…}]
// homepage: ""
// id: 606234
// imdb_id: "tt6882604"
// original_language: "en"
// original_title: "Archive"
// overview: "2038: George Almore is working on a true human-equivalent AI, and his latest prototype is almost ready. This sensitive phase is also the riskiest as he has a goal that must be hidden at all costs—being reunited with his dead wife."
// popularity: 343.151
// poster_path: "/eDnHgozW8vfOaLHzfpHluf1GZCW.jpg"
// production_companies: (5) [{…}, {…}, {…}, {…}, {…}]
// production_countries: (3) [{…}, {…}, {…}]
// release_date: "2020-08-13"
// revenue: 0
// runtime: 109
// spoken_languages: [{…}]
// status: "Released"
// tagline: "Death is not the end"
// title: "Archive"
// video: false
// vote_average: 5.9
// vote_count: 181

const Detail = ({ detail }) => {
  console.log(detail)

  return (
    <div id='Detail'>
      <img src={`http://image.tmdb.org/t/p/w500/${detail.backdrop_path}`} alt='' />
      <h1>{detail.title || detail.name || detail.original_title}</h1>
      <h2>{detail.genres[0].name}</h2>
      <h3>{detail.overview}</h3>
    </div>
  )
}

export default Detail
