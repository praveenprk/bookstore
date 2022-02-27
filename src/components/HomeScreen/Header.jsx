import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/HomeScreen/Header.css'

function Header({login}) {
    return (
        <>
        <ul className='home-header d-flex'>
            <li>
                <Link to='/'><i className="bi bi-house"></i></Link>
            </li>
            <li><img src='https://919kicks.com/wp-content/uploads/2021/09/IMG-20210907-WA0027-removebg-preview.png'
                    alt='919Kicks logo'
                    width={100}
                    height={100}/></li>
            <li>
                <Link to='/login'><i className="bi bi-lock"></i></Link>
            </li>
        </ul>
        </>
    )
}

export default Header