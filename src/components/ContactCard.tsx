import '../styles/contactCard.css'

function ContactCard () {
    return (
        <section id="contact" className="contactCard ">
            <h2 className='sectionTitle contactTitle'>Contact</h2>
            <div className='linkButtons'>
            <a  href="https://github.com/paulwilsonr"><img className="contactLink githubIcon" src="src/assets/github-mark-white.png" alt="github"></img></a>
            <a  href="https://www.linkedin.com/in/pwilson88/"><img className="contactLink linkedInIcon" src="src/assets/LI-In-Bug.png" alt="LinkedIn"></img></a>
            </div>
            <form className='emailForm' action="">
                <input className='emailInput' type="text" id="name" placeholder="Name"></input>
                <input className='emailInput' type="email" id="email" placeholder="Email"></input>
                <textarea id='message' placeholder='Message' className='emailInput' />
                <button className='sendEmailButton'>Send <img className='sendArrow' src='src/assets/right-arrow2.png'></img></button>
            </form>
        </section>
    )
}

export default ContactCard;