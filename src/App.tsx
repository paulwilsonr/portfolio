import './App.css'
import AboutCard from './components/AboutCard'
import NavBar from './components/NavBar'
import TitleCard from './components/TitleCard'

function App () {
  return (
    <div>
      <NavBar />
      <TitleCard />
      <AboutCard />
      <footer>
        <a href='https://www.freepik.com/free-vector/abstract-wavy-background-digital-technology-futuristic-vector-line-design_26127101.htm#page=2&query=black%20lines%20background&position=15&from_view=search&track=ais'>
          Image by NACreative
        </a>{' '}
        on Freepik{' '}
      </footer>
    </div>
  )
}

export default App
