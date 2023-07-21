import React from 'react'
import classes from './UserCard.module.css'

const UserCard = () => {
  return (
    <div className={classes.userCard}>
      <img src="images/me.jpg" alt="User Pic" />
      <div className={classes.details}>
        <p>Karim Mohamed</p>
        <span>Front-End Developer</span>
      </div>
      <button>Edit Profile</button>
    </div>
  )
}

export default UserCard