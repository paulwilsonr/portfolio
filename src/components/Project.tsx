import { useState } from 'react'
type Props = {
  project: {
    id: number
    name: string
    img: string
    techUsed: string[]
    live: string
    github: string
    description: string
  }
}

function Project (props: Props) {
  const [isSelected, setIsSelected] = useState(false)
  const project = props.project
  let techId = 0
  return (
    <div
      className='project'
      onMouseEnter={() => setIsSelected(true)}
      onMouseLeave={() => setIsSelected(false)}
    >
      <>
        <img className='projectScreenshot selected' src={project.img} />
        <div
          className={
            isSelected
              ? 'projectInfoContainer selected'
              : 'projectInfoContainer'
          }
        >
          <p className='projectName'>{project.name}</p>
          <p className='projectDescription'>{project.description}</p>
          <div className='projectTechUsedContainer'>
            {project.techUsed.map(tech => {
              techId = techId + 1
              return (
                <p key={techId} className='projectTechUsed'>
                  {tech}
                </p>
              )
            })}
          </div>
          <div className='projectLinksContainer'>
            <a className='projectLink live' href={project.live}>
              Live
            </a>
            <a className='projectLink github' href={project.github}>
              Github
            </a>
          </div>
        </div>
      </>
    </div>
  )
}

export default Project
