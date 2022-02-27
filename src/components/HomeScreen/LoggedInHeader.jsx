import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/HomeScreen/Header.css'

const LoggedInHeader = () => {
  return (
    <>
    <ul className='home-header d-flex'>
        <li>
          <Link to='/'><i className="bi bi-chevron-double-left"></i></Link>
        </li>
        <li>
            <Link to='/'><i className="bi bi-house"></i></Link>
        </li>
        {/* <li><img src='https://919kicks.com/wp-content/uploads/2021/09/IMG-20210907-WA0027-removebg-preview.png'
                alt='919Kicks logo'
                width={100}
                height={100}/>
        </li> */}
        <li>
            <Link to='/profile/:id'><i className="bi bi-person-circle"></i></Link>
        </li>
    </ul>
    </>
  )
}

export default LoggedInHeader