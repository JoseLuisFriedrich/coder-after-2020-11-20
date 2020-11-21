import { useEffect, useState } from 'react'

const usePromiseResolverAsyncAwait = (initialValue, task, dependencies) => {
  const [loading, setLoading] = useState(true)
  const [state, setState] = useState(initialValue)

  useEffect(() => {
    setLoading(true)

    let ignore = false

    setTimeout(() => {
      async function taskAux() {
        let response = await task()
        response = await response.json()

        if (!ignore) {
          setState(response)
          setLoading(false)
        }
      }
      taskAux()

      return () => (ignore = true)
    }, 3000)

    return () => {
      ignore = true
    }
  }, [...dependencies])

  return [state, loading]
}

export default usePromiseResolverAsyncAwait
