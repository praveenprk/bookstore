import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom'

function RegisterScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [newsletter, setNewsletter] = useState(true)

    const navigate = useNavigate()

    const handleEmail = (e) => {
      setEmail(e.target.value)
    }

    const handlePwd = (e) => {
      setPassword(e.target.value)
    }

    const handleFname = (e) => {
      setFname(e.target.value)
    }
    
    const handleLname = (e) => {
      setLname(e.target.value)
    }
    
    const handlePhone = (e) => {
      setPhone(e.target.value)
    }

    const handleNewsletter = (e) => {
      if(newsletter) 
        setNewsletter(false)
      else
        setNewsletter(true)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      navigate('/welcome')
    }
    
  return(
    <div className='px-5 mt-5'>
        <legend className='text-center'>Register @ 919Kicks</legend>
        &nbsp;
        <Form onSubmit={handleSubmit} method="POST">
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="email" name="email" placeholder="Enter email"
      value={email} onChange={handleEmail} autoComplete='true' />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="password" name="password" placeholder="Password"
      value={password} onChange={handlePwd} autoComplete='true'/>
    </Form.Group>
  </Row>

  <Form.Group className="mb-3">
    <Form.Control placeholder="First Name" name="fname" type="text"
    value={fname} onChange={handleFname} autoComplete='true'/>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Control placeholder="Last Name" name="lname"
    type="text" value={lname} onChange={handleLname} autoComplete='true'/>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Control placeholder="Phone No." name="phone" type="tel"
    value={phone} onChange={handlePhone} autoComplete='true'/>
  </Form.Group>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox"
    onChange={handleNewsletter}
    checked={newsletter}
    label="Send me exciting offers, coupons, & deals!" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Register
  </Button>
</Form>
    </div>)
}

export default RegisterScreen;
