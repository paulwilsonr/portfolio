import AboutCard from './components/AboutCard'
import NavBar from './components/NavBar'
import TitleCard from './components/TitleCard'
import ProjectsCard from './components/ProjectsCard'
import ContactCard from './components/ContactCard'
import { useEffect, useRef, useState } from 'react'
import useElementOnScreen from './util/useElementOnScreen'

function App () {
  const [pageLocation, setPageLocation] = useState('title')
  const bgChanger = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    window.onscroll = function () {
      if (bgChanger.current !== null) {
        const scroll: number = window.scrollY
        const htmlElement = document.documentElement
        const bodyElement = document.body

        const height = Math.max(
          htmlElement.clientHeight,
          htmlElement.scrollHeight,
          htmlElement.offsetHeight,
          bodyElement.scrollHeight,
          bodyElement.offsetHeight
        )

        const scrollPercent = (1 - scroll / height + 0.2).toFixed(3)
        bgChanger.current.style.backgroundColor = `rgba(0, 0, 0, ${scrollPercent})`
      }
    }
  }, [])

  const isTitleinViewport = useElementOnScreen(titleRef)

  const isAboutinViewport = useElementOnScreen(aboutRef)

  const isProjectInViewport = useElementOnScreen(projectRef)

  const isContactInViewport = useElementOnScreen(contactRef)

  useEffect(() => {
    if (isTitleinViewport) {
      setPageLocation('title')
    } else if (isAboutinViewport) {
      setPageLocation('about')
    } else if (isProjectInViewport) {
      setPageLocation('project')
    } else if (isContactInViewport) {
      setPageLocation('contact')
    }
  }, [
    isAboutinViewport,
    isContactInViewport,
    isProjectInViewport,
    isTitleinViewport
  ])

  return (
    <div>
      <NavBar location={pageLocation} />
      <div ref={titleRef}>
        <TitleCard />
      </div>
      <div ref={bgChanger} className='backgroundChanger'>
        <div className='titleContainer' ref={aboutRef}>
          <AboutCard />
        </div>
        <div ref={projectRef}>
          <ProjectsCard />
        </div>
        <div ref={contactRef}>
          <ContactCard />
        </div>
        <footer>
          <p>
            Find the code for this page{' '}
            <a
              className='footerLink'
              href='https://github.com/paulwilsonr/portfolio'
            >
              here
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
