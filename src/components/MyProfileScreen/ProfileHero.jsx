import React from 'react'

const ProfileHero = () => {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center mt-5' >
        <img src="https://randomuser.me/api/portraits/men/11.jpg"
        alt="profile_pic" className='rounded-circle'/>&nbsp;
        <p style={{fontWeight: '700'}}>Praveen Kumar</p>&nbsp;
        <span style={{fontWeight: '500'}}>Member Since: 24th Feb '22</span>
    </div>
    
  )
}

export default ProfileHero