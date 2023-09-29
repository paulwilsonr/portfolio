import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/contactCard.css'

function ContactCard () {
  const [emailSent, setEmailSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [disappear, setDisappear] = useState(false)
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  })
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setSending(true)
    if (form.current !== null) {
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
              setDisappear(true)
              setTimeout(() => {
                setEmailSent(true)
                setSending(false)
              }, 500)

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
  }

  function handleChange (newValue: string, keyName: string) {
    const tempValues = { ...formValues }
    tempValues[keyName as keyof typeof tempValues] = newValue
    setFormValues(tempValues)
  }
  return (
    <section id='contact' className='contactCard '>
      <h2 className='sectionTitle contactTitle'>Contact</h2>
      <p className='contactText'>
        If you have any questions or just want to chat, please feel free to send
        me a message and I'll get back to you as soon as i can!
      </p>
      <div className='linkButtons'>
        <a href='https://github.com/paulwilsonr'>
          <img
            className='contactLink githubIcon'
            src='/assets/github-mark-white.png'
            alt='github'
          ></img>
        </a>
        <a href='https://www.linkedin.com/in/pwilson88/'>
          <img
            className='contactLink linkedInIcon'
            src='/assets/LI-In-Bug.png'
            alt='LinkedIn'
          ></img>
        </a>
      </div>
      <form
        ref={form}
        onSubmit={(e: React.SyntheticEvent) => sendEmail(e)}
        className='emailForm'
      >
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
        {emailSent ? (
          <div className='green sentButton'>
            <p>Sent</p>
            <img className='sentCheck' src='/assets/checkmark.png'></img>
          </div>
        ) : (
          <button
            type='submit'
            value='Send'
            className={
              emailSent
                ? 'sendEmailButton pointer green'
                : 'sendEmailButton pointer'
            }
          >
            Send
            <img
              className={
                sending
                  ? disappear
                    ? 'sendArrow sending disappear'
                    : 'sendArrow sending'
                  : 'sendArrow'
              }
              src='/assets/right-arrow2.png'
            ></img>
          </button>
        )}
      </form>
    </section>
  )
}

export default ContactCard
