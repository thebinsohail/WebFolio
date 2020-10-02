import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import {genderOptions} from '../constants'
import './css/contact.css'

const Contact = () => (
  <Form className="container">
      <h1>Contact me</h1>
      {/* <img src="./images/anasbinsohail.jpg" width="20%" style={{borderRadius:'300px'}} /> */}
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
        placeholder='Gender'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Message'
      placeholder='Type a Message'
    />
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='Enter you email  e.g example@abc.com'
      
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      color='red'
      content='Confirm'
      label='Send the message'
    />
  </Form>
)
  
export default Contact;