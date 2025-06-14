import React from 'react'
import UserNameHero from '../components/UserNameHero'
import UserNameSection2 from '../components/UserNameSection2'
import Gallery from '../components/Gallery'
import TellUs from '../components/TellUs'

const UserName = () => {
  return (
    <div>
      <UserNameHero />
      <UserNameSection2 />
      <Gallery />
      <TellUs/>
    </div>
  )
}

export default UserName
