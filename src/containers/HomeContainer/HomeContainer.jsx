import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import PosterList from '../../components/PosterList/PosterList'
import Spinner from '../../components/Spinner/Spinner'

const HomeContainer = () => {
  //Traer los datos de nuestra api
  const [loading, setLoading] = useState(true)
  const [posters, setPosters] = useState({})
  const { type } = useParams()
  console.log('1')

  useEffect(() => {
    setLoading(true)
    console.log('3')

    let ignore = false

    setTimeout(() => {
      let lastType = type || sessionStorage.getItem('type') || 'movie'
      const url = `https://api.themoviedb.org/3/${lastType}/popular?with_genres=18&api_key=6c42ab066380f0f8504bff1f305fbf23`
      console.log('4')

      fetch(url)
        .then((response) => {
          if (!ignore) {
            return response.json()
          }
        })
        .then((response) => {
          if (!ignore) {
            console.log('6')

            setPosters(response)
            setLoading(false)
          }
        })
    }, 3000)

    return () => {
      ignore = true
    }
  }, [type])

  console.log('2')

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

export default HomeContainer
