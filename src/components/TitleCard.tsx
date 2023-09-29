import '../styles/titleCard.css'

function TitleCard () {
    return (
        <section className="titleCard" id='home'>
            <div className='title'><span id='paul'><span className="letter">P</span><span className="letter">a</span><span className="letter">u</span><span className="letter">l</span></span><span id='wilson'>Wilson</span><span id='web'>Web</span><span id='dev'>Developer</span></div>
            <img className='backgroundImage' src="/assets/wavy_background_4.jpg" />
        </section>
    )
}

export default TitleCard;