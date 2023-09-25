import TechIcon from "./TechIcon"
import techData from '../util/tech.json'

type Item = {
    id: number,
    name: string,
    img: string,
    years: string
}   



function AboutCard () {
      return (
    <div className='aboutCard'>
      <h2>About</h2>
      <p>
        Welcome to my corner of the web! I'm Paul Wilson, a passionate and
        innovative web developer with a knack for turning ideas into
        pixel-perfect, user-friendly websites. With 2 years of experience in
        web development, I've had the privilege of working on a diverse range of
        projects, each challenging me to push the boundaries of creativity and
        functionality.
      </p>
        <div className="techIconContainer">
            {techData.map((item: Item) => {

                return <TechIcon item={item} />;
            })}
        </div>
    </div>
  )
}

export default AboutCard
