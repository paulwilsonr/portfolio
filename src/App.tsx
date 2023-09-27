import AboutCard from './components/AboutCard'
import NavBar from './components/NavBar'
import TitleCard from './components/TitleCard'
import ProjectsCard from './components/ProjectsCard'
import ContactCard from './components/ContactCard'
import { useEffect, useRef } from 'react'

function App () {
  useEffect(() => {
    window.onscroll = function () {
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
      document.querySelector(
        '.backgroundChanger'
      ).style.backgroundColor = `rgba(0, 0, 0, ${scrollPercent})`
    }
  })

  return (
    <div>
      <NavBar />
      <TitleCard />
      <div className='backgroundChanger'>
        <AboutCard />
        <ProjectsCard />
        <ContactCard />
        <footer>
          <p>Created by Paul Wilson</p>
        </footer>
      </div>
    </div>
  )
}

export default App
