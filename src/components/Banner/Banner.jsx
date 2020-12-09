import Button from '../Button/Button'
import './Banner.scss'

// adult: false
// backdrop_path: "/bx326cwBtDsfDcnTgFlK5dXkyaC.jpg"
// genre_ids: (3) [10402, 18, 10749]
// id: 630566
// original_language: "en"
// original_title: "Clouds"
// overview: "Young musician Zach Sobiech discovers his cancer has spread, leaving him just a few months to live. With limited time, he follows his dream and makes an album, unaware that it will soon be a viral music phenomenon."
// popularity: 251.857
// poster_path: "/2YvT3pdGngzpbAuxamTz4ZlabnT.jpg"
// release_date: "2020-10-09"
// title: "Clouds"
// video: false
// vote_average: 8.4
// vote_count: 344

const truncate = (text, max) => {
  return text.length > max ? text.substr(0, max) + '...' : text
}

const Banner = ({ poster }) => {
  return (
    <div id='Banner' style={{ backgroundSize: 'cover', backgroundImage: `url('http://image.tmdb.org/t/p/w500/${poster.backdrop_path}')` }}>
      <div>
        <h1>{poster.title || poster.name || poster.original_title}</h1>
        <Button content='Play' path='/' />
        <Button content='My List' path='/' />
        <h2>{truncate(poster.overview, 120)}</h2>
      </div>
      <div />
    </div>
  )
}

export default Banner
