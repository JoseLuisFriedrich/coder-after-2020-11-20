import { useEffect, useState } from 'react'

const usePromiseResolver = (initialValue, task, dependencies) => {
  const [loading, setLoading] = useState(true)
  const [state, setState] = useState(initialValue)

  useEffect(() => {
    setLoading(true)

    let ignore = false

    setTimeout(() => {
      task()
        .then((response) => {
          if (!ignore) {
            return response.json()
          }
        })
        .then((response) => {
          if (!ignore) {
            setState(response)
            setLoading(false)
          }
        })
    }, 3000)

    return () => {
      ignore = true
    }
  }, [...dependencies])

  return [state, loading]
}

export default usePromiseResolver
