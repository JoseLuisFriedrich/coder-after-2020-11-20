import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../../components/Detail/Detail'
import Spinner from '../../components/Spinner/Spinner'
import usePromiseResolver from '../../customHook/usePromiseResolver'
import usePromiseResolverAsyncAwait from '../../customHook/usePromiseResolverAsyncAwait'

const DetailContainerExtraClass = () => {
  const { type, id } = useParams()
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=6c42ab066380f0f8504bff1f305fbf23`
  //  const [detail, loading] = usePromiseResolver({}, () => fetch(url), [type, id])
  const [detail, loading] = usePromiseResolverAsyncAwait({}, () => fetch(url), [type, id])

  return <div id='DetailContainer'>{loading ? <Spinner /> : <Detail detail={detail} />}</div>
}

export default DetailContainerExtraClass
