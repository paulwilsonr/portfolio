import AboutCard from './components/AboutCard'
import NavBar from './components/NavBar'
import TitleCard from './components/TitleCard'
import ProjectsCard from './components/ProjectsCard'
import ContactCard from './components/ContactCard'
import {  useEffect, useRef } from 'react'

function App () {

  const bgChanger = useRef<HTMLDivElement>(null);
    useEffect(() => {
      
        console.log(bgChanger.current);
        window.onscroll = function () {
          if(bgChanger.current !== null) {
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
    

  return (
    <div>
      <NavBar />
      <TitleCard />
      <div ref={bgChanger} className='backgroundChanger'>
        <AboutCard />
        <ProjectsCard />
        <ContactCard />
        <footer>
          <p>Find the code for this page <a className='footerLink' href='https://github.com/paulwilsonr/portfolio'>here</a></p>
        </footer>
      </div>
    </div>
  )
}

export default App
