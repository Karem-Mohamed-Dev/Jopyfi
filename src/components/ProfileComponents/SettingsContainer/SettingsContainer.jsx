import React from 'react'
import classes from './SettingsContainer.module.css'

import ImgCard from './ImgCard/ImgCard'
import SettingsCard from './SettingsCard/SettingsCard'

const SettingsContainer = () => {
  return (
    <div className={classes.container}>
        <ImgCard />
        <SettingsCard />
    </div>
  )
}

export default SettingsContainer