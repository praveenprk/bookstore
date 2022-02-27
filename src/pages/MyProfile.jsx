import React from 'react'
import LoggedInHeader from '../components/HomeScreen/LoggedInHeader'
import MyBadge from '../components/MyProfileScreen/MyBadge'
import MyLevels from '../components/MyProfileScreen/MyLevels'
import ProfileHero from '../components/MyProfileScreen/ProfileHero'


const MyProfile = () => {
  return (
    <>
    <LoggedInHeader/>
    <ProfileHero/>
    <MyBadge/>
    <MyLevels/>
    </>
  )
}

export default MyProfile