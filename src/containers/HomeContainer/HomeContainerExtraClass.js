import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import PosterList from '../../components/PosterList/PosterList'
import Spinner from '../../components/Spinner/Spinner'
import usePromiseResolver from '../../customHook/usePromiseResolver'
import usePromiseResolverAsyncAwait from '../../customHook/usePromiseResolverAsyncAwait'

const HomeContainerExtraClass = () => {
  //Traer los datos de nuestra api
  const { type } = useParams()
  let lastType = type || sessionStorage.getItem('type') || 'movie'
  const url = `https://api.themoviedb.org/3/${lastType}/popular?with_genres=18&api_key=6c42ab066380f0f8504bff1f305fbf23`
  //  const [posters, loading] = usePromiseResolver({}, () => fetch(url), [type])
  const [posters, loading] = usePromiseResolverAsyncAwait({}, () => fetch(url), [type])

  return (
    <div id='HomeContainer'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Banner poster={posters.results[Math.floor(Math.random() * posters.results.length)]} />
          <PosterList posters={posters.results} />
        </>
      )}
    </div>
  )
}

export default HomeContainerExtraClass
