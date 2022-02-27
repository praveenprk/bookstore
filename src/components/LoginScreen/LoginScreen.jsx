import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/LoginScreenStyle/LoginScreenStyle.css'


function LoginScreen() {
    
    const [email, newEmail] = useState('')
    const [password, newPass] = useState('')
    const [type, setType] = useState('password')
    const [login, setLogin] = useState(false)
    const [userInfo, setUserInfo] = useState({})

    const handleEmail = (e) => {
        newEmail(e.target.value)
    }

    const handlePass = (e) => {
        newPass(e.target.value)
    }

    const revealPass = () => {
        if(type === 'text') {
            setType('password')
        } else {
            setType('text')
        }
    }

    //login user

     const handleSubmit = e => {
    e.preventDefault()
    const loginDetails = {
        email: email,
        password: password
    }
    axios.post('/users/login', loginDetails)
    .then(res => {
        const { status, message } = res.data
        status === true ? setLogin(true) : alert(message)
      }).catch(err => {
        console.log(err)
      })
    }

    //fetch details of user
    useEffect(() => {
        if(login) {
          document.cookie = `username=${email}; path=/; max-age=604800; expires=${new Date(Date.now() + 604800000).toUTCString()}` 
          axios.get(`/users/view/${email}`)
          .then(res => {
            const {data} = res
            setUserInfo(data)
          }).catch(err => console.log(err))
        }
    }, [login])

    //set details to localstorage
    useEffect(() => {
        if(userInfo.name) {
            localStorage.setItem("userInfo", JSON.stringify(userInfo))
            console.log(userInfo)
            window.location.href = '/'
        }
    }, [userInfo])


  return( <div className="mt-5">
    <legend className='text-center'>Login to shop @ 919Kicks!</legend>&nbsp;
            <Form className='login-form px-5 m-4' method='post'
            onSubmit={handleSubmit}>
  <Form.Group className="mb-3">
    <Form.Control type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmail}
                  required
                  autoComplete='true'/>

  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Control type={type} placeholder="Password"
    value={password}
    onChange={handlePass}
    required
    autoComplete='true'/>
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
