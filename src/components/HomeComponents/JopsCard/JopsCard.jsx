import React from 'react'
import JopsSearch from './searchCard/JopsSearch'
import JopsContainer from './JopsContainer/JopsContainer'

const JopsCard = ({ dataArr }) => {
  return (
    <>
        <JopsSearch />
        <JopsContainer dataArr={dataArr} />
    </>
  )
}

export default JopsCard