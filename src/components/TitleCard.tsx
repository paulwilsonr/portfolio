import '../styles/titleCard.css'

function TitleCard () {
    return (
        <div className="titleCard">
            <h1 className='title'><span id='paul'>Paul</span><span id='wilson'>Wilson</span><span id='web'>Web</span><span id='dev'>Developer</span></h1>
            <img className='backgroundImage' src="src/assets/wavy_background_4.jpg" />
        </div>
    )
}

export default TitleCard;