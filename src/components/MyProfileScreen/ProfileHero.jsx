import { useSelector } from "react-redux"

const ProfileHero = () => {

  const heroDetails = useSelector(state => state.auth.userDetails)
  console.log(heroDetails)
  const {name, joinDate} = heroDetails

  return (
    <div className='container d-flex flex-column justify-content-center align-items-center mt-5' >
        <img src="https://randomuser.me/api/portraits/men/11.jpg"
        alt="profile_pic" className='rounded-circle'/>&nbsp;
        <p style={{fontWeight: '700'}}>{name.toUpperCase()}</p>&nbsp;
        <span style={{fontWeight: '500'}}>Member Since: {joinDate}</span>
    </div>
  )
}

export default ProfileHero