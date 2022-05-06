import { AppBar } from '@mui/material'
import React from 'react'
import { Logo } from '../../Blocks/Logo'
import { Navbar } from '../../Blocks/Navbar'
import { headerStyles, ToolBar } from './Header.styles'
import { IconMenu } from '../../Blocks/IconMenu'
import { ColorProp } from '../../../Interfaces'

const Header: React.FC<ColorProp> = (props) => {

  return (
    <AppBar position='static' color='transparent' sx={headerStyles}>
        <ToolBar>
            <Logo></Logo>
            <Navbar textcolor={props.textcolor}></Navbar>
            <IconMenu></IconMenu>
        </ToolBar>
    </AppBar>
  )
}

export default Header