function ContactCard () {
    return (
        <div id="contact" className="contactCard">
            <h2>Contact</h2>
            <a  href="https://github.com/paulwilsonr"><img className="contactLink" src="src/assets/github-mark-white.png" alt="github"></img></a>
            <a  href="https://www.linkedin.com/in/pwilson88/"><img className="contactLink" src="src/assets/LI-In-Bug.png" alt="LinkedIn"></img></a>
            <form action="">
                <input type="text" id="name" placeholder="Name"></input>
                <input type="email" id="email" placeholder="Your Email"></input>
                <input type="textbox" id="message" placeholder="Your Message" />
                <button>Send</button>
            </form>
        </div>
    )
}

export default ContactCard;