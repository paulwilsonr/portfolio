import { ChangeEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/contactCard.css'

function ContactCard () {
  const [emailSent, setEmailSent] = useState(false)
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  })
  const form = useRef()

  const sendEmail = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_5f29kc8',
        'template_6f1necq',
        form.current,
        'bBdFNunfFK0ALg1_l'
      )
      .then(
        result => {
          if (result.status === 200) {
            setEmailSent(true)
            setFormValues({
                name: '',
                email: '',
                message: ''
              })
          }
        },
        error => {
          console.log(error)
        }
      )
  }

  function handleChange (newValue: string, keyName: string) {
    const tempValues = { ...formValues }
    tempValues[keyName] = newValue
    setFormValues(tempValues)
    console.log(formValues)
  }
  return (
    <section id='contact' className='contactCard '>
      <h2 className='sectionTitle contactTitle'>Contact</h2>
      <div className='linkButtons'>
        <a href='https://github.com/paulwilsonr'>
          <img
            className='contactLink githubIcon'
            src='src/assets/github-mark-white.png'
            alt='github'
          ></img>
        </a>
        <a href='https://www.linkedin.com/in/pwilson88/'>
          <img
            className='contactLink linkedInIcon'
            src='src/assets/LI-In-Bug.png'
            alt='LinkedIn'
          ></img>
        </a>
      </div>
      <form ref={form} onSubmit={sendEmail} className='emailForm'>
        <input
          className='emailInput'
          name='from_name'
          type='text'
          id='name'
          placeholder='Name'
          value={formValues.name}
          onChange={e => {
            handleChange(e.target.value, 'name')
          }}
        ></input>
        <input
          className='emailInput'
          name='reply_to'
          type='email'
          id='email'
          placeholder='Email'
          value={formValues.email}
          onChange={e => {
            handleChange(e.target.value, 'email')
          }}
        ></input>
        <textarea
          name='message'
          id='message'
          placeholder='Message'
          className='emailInput'
          value={formValues.message}
          onChange={e => {
            handleChange(e.target.value, 'message')
          }}
        />
        <button type='submit' value='Send' className='sendEmailButton pointer'>
          Send{' '}
          <img className='sendArrow' src='src/assets/right-arrow2.png'></img>
        </button>
      </form>
    </section>
  )
}

export default ContactCard
