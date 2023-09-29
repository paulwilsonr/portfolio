import TechIcon from './TechIcon'
import techData from '../util/tech.json'
import '../styles/aboutCard.css'

interface Item {
  id: number
  name: string
  img: string
  years: number
}

function AboutCard () {
  return (
    <section className='aboutCard' id='about'>
      <h2 className='sectionTitle'>About</h2>
      <p className='aboutText'>
        Welcome to my corner of the web! I'm Paul Wilson, a passionate and
        innovative web developer with a knack for turning ideas into
        pixel-perfect, user-friendly websites. With 2 years of experience in web
        development, I've had the privilege of working on a diverse range of
        projects, each challenging me to push the boundaries of creativity and
        functionality.
      </p>
      <div className='techIconContainer'>
        {techData.map((item: Item) => {
          return <TechIcon key={item.id} item={item} />
        })}
      </div>
    </section>
  )
}

export default AboutCard
