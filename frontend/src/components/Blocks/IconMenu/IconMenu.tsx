import React, {useState} from 'react'
import { IconButton } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { MenuContainer, MenuWrapper, MenuLink, MenuBlock } from './IconMenu.styles'

const IconMenu = () => {

    const [anchorEl, setAnchorEl] = useState<null|HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
  
    return (
        <MenuWrapper>
            <IconButton color='info' aria-label='menu-icon' onClick={handleClick}>
                <MenuRoundedIcon fontSize='large'></MenuRoundedIcon>
            </IconButton>
            <MenuContainer 
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            >
                <MenuBlock><MenuLink to='/'>Home</MenuLink></MenuBlock>
                <MenuBlock><MenuLink to='/predict'>Predict</MenuLink></MenuBlock>
                <MenuBlock><MenuLink to='/about'>About</MenuLink></MenuBlock>
                <MenuBlock><MenuLink to='/author'>Author</MenuLink></MenuBlock>
            </MenuContainer>
        </MenuWrapper>
    )
}

export default IconMenu