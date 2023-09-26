type Props = {
  item: {
    id: number
    name: string
    img: string
    years: number
  }
}

function TechIcon (props: Props) {
  const item = props.item
  return (
    <div className="techItem" >
      <img className="techIcon" src={item.img} alt={item.name} />
      <p className="techName">{item.name}</p>
    </div>
  )
}

export default TechIcon
