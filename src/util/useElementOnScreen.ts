import { useState, useEffect, RefObject } from 'react'



const options = {
  root: null,
  rootMargin: '100%',
  threshold: 1
}

const useElementOnScreen = (locationRef: RefObject<HTMLDivElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  if(window.innerWidth < 480) {
    options.rootMargin = '100%'
  } else {
    options.rootMargin = '20%'
  }
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
     
      console.log(options)
    }, options)
    if (locationRef !== null) {
      observer.observe(locationRef.current)
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (locationRef !== null) observer.unobserve(locationRef.current)
    }
  }, [locationRef])

  return isIntersecting
}

export default useElementOnScreen
