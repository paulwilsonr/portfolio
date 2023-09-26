import '../styles/contactCard.css'

function ContactCard () {
    return (
        <section id="contact" className="contactCard ">
            <h2 className='sectionTitle contactTitle'>Contact</h2>
            <a  href="https://github.com/paulwilsonr"><img className="contactLink githubIcon" src="src/assets/github-mark-white.png" alt="github"></img></a>
            <a  href="https://www.linkedin.com/in/pwilson88/"><img className="contactLink linkedInIcon" src="src/assets/LI-In-Bug.png" alt="LinkedIn"></img></a>
            <form className='emailForm' action="">
                <input className='emailInput' type="text" id="name" placeholder="Name"></input>
                <input className='emailInput' type="email" id="email" placeholder="Your Email"></input>
                <input className='emailInput' type="textbox" id="message" placeholder="Your Message" />
                <button className='sendEmailButton'>Send <img className='sendArrow' src='src/assets/right-arrow.png'></img></button>
            </form>
        </section>
    )
}

export default ContactCard;