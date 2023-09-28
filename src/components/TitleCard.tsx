import '../styles/titleCard.css'

function TitleCard () {
    return (
        <section className="titleCard" id='home'>
            <div className='title'><span id='paul'>Paul</span><span id='wilson'>Wilson</span><span id='web'>Web</span><span id='dev'>Developer</span></div>
            <img className='backgroundImage' src="/assets/wavy_background_4.jpg" />
        </section>
    )
}

export default TitleCard;