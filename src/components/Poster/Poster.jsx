import { useParams } from 'react-router-dom'
import Button from '../Button/Button'
import './Poster.scss'

// adult: false
// backdrop_path: "/cdav7lVUviYvQwKB2v73PpaJMFV.jpg"
// genre_ids: (4) [28, 16, 18, 878]
// id: 283566
// original_language: "ja"
// original_title: "シン・エヴァンゲリオン劇場版:||"
// overview: ""
// popularity: 260.058
// poster_path: "/q034rbTWteRNA8sMSc2YjegmiUx.jpg"
// release_date: "2021-01-23"
// title: "Evangelion: 3.0+1.0 Thrice Upon a Time"
// video: false
// vote_average: 0
// vote_count: 0

const Poster = ({ poster }) => {
  const { type } = useParams()
  let lastType = type || sessionStorage.getItem('type') || 'movie'

  return (
    <div id='Poster'>
      <Button content={`http://image.tmdb.org/t/p/w200/${poster.poster_path}`} path={`/${lastType}/${poster.id}`} />
    </div>
  )
}

export default Poster
