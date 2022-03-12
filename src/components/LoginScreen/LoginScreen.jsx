import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Form, /*Button*/ } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../../styles/LoginScreenStyle/LoginScreenStyle.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux'
import { authUser, unauthUser } from '../../features/auth/authSlice'
import { Button, Grid, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'

function LoginScreen() {
    
    const [email, newEmail] = useState('')
    const [password, newPass] = useState('')
    const [type, setType] = useState('password')
    const [login, setLogin] = useState(false)
    const [userInfo, setUserInfo] = useState({})

    const dispatch = useDispatch()


  //Error Toast definition
    const loginError = () => {toast.error('Wrong username/password!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      })
    }

    //Success
    const loginOK = () => {toast.success('Logged In... Redirecting...', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      })
    }

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
        // status === true ? setLogin(true) : loginError()
        if(status === true) {
           loginOK()
          setTimeout(() => setLogin(true), 2000)
        } else {
          loginError()
        }
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
            console.log(userInfo)
          }).catch(err => console.log(err))
        }
    }, [login])

    //set details to localstorage
    useEffect(() => {
        if(userInfo.name) {
            localStorage.setItem("userInfo", JSON.stringify(userInfo))
            /* const details = JSON.parse(localStorage.getItem("userInfo"))
            dispatch(authUser(details)) */
            window.location.href = '/'
        }
    }, [userInfo])


  return( 
    <Grid container marginTop={5}>
      <Grid item xs={12} lg={12} sm={12}>
      <Typography variant="h5" component="h5" textAlign="center">
        Login to shop @ 919Kicks!</Typography>&nbsp;
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

 {/*  <Button variant="primary" type="submit">
    <i className='bi bi-lock'>&nbsp;</i>Login
  </Button> */}
  <Grid item textAlign='center'>
  <Button variant="contained" endIcon={<LoginIcon/>} type="submit">Login</Button>
  </Grid>
</Form>
<p className='text-center'>
  <Link to='/register'>Register Now</Link>
</p>
<ToastContainer/>
</Grid>
</Grid>
)
}

export default LoginScreen;