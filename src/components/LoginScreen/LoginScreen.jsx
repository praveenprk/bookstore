import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/LoginScreenStyle/LoginScreenStyle.css'

function LoginScreen() {
    
    const [email, newEmail] = useState('')
    const [pass, newPass] = useState('')
    // const [hidePass, setHidePass] = useState(true)
    const [type, setType] = useState('password')
    
    const handleEmail = (e) => {
        newEmail(e.target.value)
        // console.log(email)
    }

    const handlePass = (e) => {
        newPass(e.target.value)
        // console.log(pass)
    }

    const revealPass = () => {
        if(type === 'text') {
            setType('password')
        } else {
            setType('text')
        }
    }
    
  
  return( <div className="mt-5">
    <legend className='text-center'>Login to shop @ 919Kicks!</legend>&nbsp;
            <Form className='login-form px-5 m-4'>
  <Form.Group className="mb-3">
    <Form.Control type="email" placeholder="Enter email"
    value={email} onChange={handleEmail}/>

  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Control type={type} placeholder="Password"
    value={pass}
    onChange={handlePass} />
    <i className='bi bi-eye showPassIcon' onClick={revealPass}></i>
  </Form.Group>

  <Button variant="primary" type="submit">
    <i className='bi bi-lock'>&nbsp;</i>Login
  </Button>
</Form>
<p className='text-center'>
  <Link to='/register'>Register Now</Link>
</p>
        </div>)
}

export default LoginScreen;
