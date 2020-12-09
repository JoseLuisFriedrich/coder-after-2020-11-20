import Poster from '../Poster/Poster'
import './PosterList.scss'

const PosterList = ({ posters }) => {
  //map

  return (
    <div id='PosterList'>
      {posters.map((poster, idx) => {
        return <Poster key={idx} poster={poster} />
      })}
    </div>
  )
}

export default PosterList
