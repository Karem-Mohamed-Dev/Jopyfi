import React from 'react'
import classes from './NavCard.module.css'
import { NavLink } from 'react-router-dom'

export const NavCard = ({ title, des, to }) => {
  return (
    <NavLink className={classes.card} to={to}>
        <p>{title}</p>
        <span>{des}</span>
    </NavLink>
  )
}
