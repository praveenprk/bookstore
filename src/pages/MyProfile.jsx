import React from 'react'
import LoggedInHeader from '../components/HomeScreen/LoggedInHeader'
import MyBadge from '../components/MyProfileScreen/MyBadge'
import MyLevels from '../components/MyProfileScreen/MyLevels'
import MyOrderDetails from '../components/MyProfileScreen/MyOrderDetails'
import MyOrders from '../components/MyProfileScreen/MyOrders'
import ProfileHero from '../components/MyProfileScreen/ProfileHero'


const MyProfile = () => {
  return (
    <>
    <LoggedInHeader/>
    <ProfileHero/>
    <MyBadge/>
    <MyLevels/>
    <MyOrders/>
    </>
  )
}

export default MyProfile