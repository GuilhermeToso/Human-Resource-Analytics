import { Container, Typography} from '@mui/material'
import React from 'react'
import { Nav, NavMenu, NavLink } from './Navbar.styles'
import { ColorProp } from '../../../Interfaces'


const Navbar: React.FC<ColorProp> = (props) => {

  return (
    <Container >
      <Nav>
        <NavMenu>
          <NavLink textcolor={props.textcolor} to='/'>
            <Typography variant='button'>Home</Typography>
          </NavLink>
          <NavLink textcolor={props.textcolor} to='/predict'>
            <Typography variant='button'>Predict</Typography>
          </NavLink>
          <NavLink textcolor={props.textcolor} to='/about'>
            <Typography variant='button'>About</Typography>
          </NavLink>
          <NavLink textcolor={props.textcolor} to='/author'>
          <Typography variant='button'>Author</Typography>
          </NavLink>
        </NavMenu>
      </Nav>
    </Container>
    
  )
}

export default Navbar