import React from 'react'
import classes from './Profile.module.css'
import SettingsContainer from '../components/ProfileComponents/SettingsContainer/SettingsContainer'
import NavCardsContainer from '../components/ProfileComponents/NavCardsContainer/NavCardsContainer'

const ProfilePage = () => {
  return (
    <div className={classes.page}>
      <div className={classes.content}>
        <NavCardsContainer />
        <SettingsContainer />
      </div>
    </div>
  )
}

export default ProfilePage