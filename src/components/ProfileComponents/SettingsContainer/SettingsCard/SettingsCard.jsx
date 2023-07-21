import React from 'react'
import classes from './SettingsCard.module.css'

import Account from './Options/Account'

const SettingsCard = () => {
  return (
    <div className={classes.container}>
      <Account />
    </div>
  )
}

export default SettingsCard