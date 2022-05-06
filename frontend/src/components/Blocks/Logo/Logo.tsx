import { Icon } from '@mui/material'
import React from 'react'
import { logo } from '../../../Constants'
const Logo = () => {
  return (
    <Icon>
        <img src={logo} alt="AI Icon" />
    </Icon>
  )
}

export default Logo