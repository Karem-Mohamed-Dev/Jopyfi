import React from 'react'
import classes from './ImgCard.module.css'

const ImgCard = () => {
  return (
    <div className={classes.card}>
        <div className={classes.container}>
        <img src="images/me.jpg" width='100px' alt="User Pic" />
            <div className={classes.details}>
            <p>Upload a New Photo</p>
            <span>me.jpg</span>
            </div>
        </div>
        <button>Update</button>
    </div>
  )
}

export default ImgCard