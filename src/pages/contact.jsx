import Layout from '../layout/Layout'
import contact from '../styles/contact.module.scss'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import * as yup from 'yup'
import { contactSchema } from '../validations/contact-validation'

function Contact() {
  const mailFields = [
    {
      id: 'from_name',
      type: 'text',
      label: 'Full name',
      tag: 'input'
    },
    {
      id: 'reply_to',
      type: 'text',
      label: 'Email address',
      tag: 'input'
    },
    {
      id: 'subject',
      type: 'text',
      label: 'Subject',
      tag: 'input'
    },
    {
      id: 'message',
      type: 'text',
      label: 'Write your message here',
      tag: 'textarea'
    },
  ]

  const emptyMail = {
    from_name: '',
    reply_to: '',
    subject: '',
    message: '',
  }

  const [mail, setMail] = useState(emptyMail)

  const emptyErrors = {
    from_name: [],
    reply_to: [],
    subject: [],
    message: [],
  }

  const [errors, setErrors] = useState(emptyErrors)

  function changeHandler(e) {
    const { name, value } = e.target
    setMail(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  async function sendEmail(e) {
    e.preventDefault()

    const isValid = await contactSchema.isValid(mail)
    setErrors(emptyErrors)

    if (isValid) {
      emailjs.sendForm(
        "service_ko4dt38",
        "template_pr60iyj",
        e.target,
        'user_K4D1oqAXcR4Z9KBSkCF3f'
      ).then(res=>console.log(res)).catch(err=>console.log(err));

      setMail(emptyMail)
        e.target.reset()
    } else {
      await contactSchema
        .validate(mail, { abortEarly: false })
        .catch(err => {
          err.inner.forEach(e=>{
            const name = e.path
            const value = e.message
            setErrors(prevState => ({
              ...prevState,
              [name]: value,
            }))
          })
        }) 
    }
  }

  return (
    <Layout>
      <h2 className='fs-36 pb-1 pt-2 txt-center'>Contact Me</h2>
      <div className='d-flex fd-col w-100 ai-center'>
        {}
        <form action='' autoComplete='off' className={` container d-flex fd-col jc-center ai-center`} onSubmit={sendEmail}>
          <div className={`row gap-2 ${contact.form}`}>
            {mailFields.map((req, index) => {
              if(index < mailFields.length-1){
                return (
                  <div className={`${contact.form__group} w-100 relative grow-1 mt-4`} key={index}>
                    
                    <input name={req.id} type={req.type} id={req.id} onChange={changeHandler} className={`${contact.form__group__input} p-2 pt-3 bg-transparent rounded-s w-100`} placeholder={req.label} autoComplete='off'/>
                    
                    <label htmlFor={req.id}>{req.label} <br /> <span className={`color-highlight fs-12 relative ${contact.form__group__error}`}> {errors[req.id]} </span></label>
                  </div>
                )
              }
            })}
          </div>
          <div className={`row gap-2 ${contact.form}`}>
            <div className={`${contact.form__group} w-100 relative grow-1 mt-4`}>
              
              <textarea id='message' name='message' onChange={changeHandler} cols='30' rows='10' className={`${contact.form__group__input} p-2 pt-3 bg-transparent rounded-s w-100 border`} placeholder='Write your mail here' autoComplete='off'></textarea>
              <label htmlFor='message'>Write your mail here <br /> <span className={`color-highlight fs-12 relative ${contact.form__group__error}`}> {errors.message} </span></label>
            </div>
          </div>
          <button type='submit' className={`${contact.button} button color-primary-dark fs-20 py-2 mt-4`}>
            Send Email
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
