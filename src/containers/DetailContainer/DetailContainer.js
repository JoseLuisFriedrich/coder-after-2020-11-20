import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../../components/Detail/Detail'
import Spinner from '../../components/Spinner/Spinner'

const DetailContainer = () => {
  const [loading, setLoading] = useState(true)
  const [detail, setDetail] = useState({})
  const { type, id } = useParams()

  useEffect(() => {
    setLoading(true)

    let ignore = false

    setTimeout(() => {
      const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=6c42ab066380f0f8504bff1f305fbf23`

      fetch(url)
        .then((response) => {
          if (!ignore) {
            return response.json()
          }
        })
        .then((response) => {
          if (!ignore) {
            setDetail(response)
            setLoading(false)
          }
        })
    }, 3000)

    return () => {
      ignore = true
    }
  }, [type, id])

  return <div id='DetailContainer'>{loading ? <Spinner /> : <Detail detail={detail} />}</div>
}

export default DetailContainer
