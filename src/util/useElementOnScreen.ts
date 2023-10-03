import { useState, useEffect, RefObject } from 'react'

const options = {
  root: null,
  rootMargin: '20%',
  threshold: 1
}

const useElementOnScreen = (locationRef: RefObject<HTMLDivElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)
    if (locationRef !== null) {
      observer.observe(locationRef.current)
    }
    return () => {
      if (locationRef !== null) observer.unobserve(locationRef.current)
    }
  }, [locationRef])

  return isIntersecting
}

export default useElementOnScreen
