import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import 'semantic-ui-css/semantic.min.css'
import '../css/contact.css'

import Header from './Header'
const ContactForm = () => {
  const handleOnSubmit = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        result => {
          console.log(result.text)
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
        },
        error => {
          console.log(error.text)
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text
          })
        }
      )
    e.target.reset()
  }
// -----
  return (
    <div className='main-container'>
      <Header />
      <div className='hello'>
      <div className='hello-d'>
          <p>If you have any Questions or Comments, please dont hesitat to reach out to me. </p>
        </div>
        <div className='contact-form'>
          <Form className='form-field' onSubmit={handleOnSubmit}>
            <Form.Field
              className='input'
              id='form-input-control-email'
              control={Input}
              label='Email'
              name='user_email'
              placeholder='Email…'
              required
              icon='mail'
              iconPosition='left'
            />
            <Form.Field
              className='input'
              id='form-input-control-last-name'
              control={Input}
              label='Name'
              name='user_name'
              placeholder='Name…'
              required
              icon='user circle'
              iconPosition='left'
            />
            <Form.Field
              id='form-textarea-control-opinion'
              control={TextArea}
              label='Message'
              name='user_message'
              placeholder='Message…'
              required
            />
            <Button type='submit' color='twitter'>
              Get in touch
            </Button>
          </Form>
        </div>
 
      </div>
    </div>
  )
}
export default ContactForm
