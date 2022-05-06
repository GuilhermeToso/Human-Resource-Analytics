import styled from "@emotion/styled";
import { Menu } from "@mui/material";
import { Link } from "react-router-dom";
import { DarkTheme } from '../../../Styles/Theme';
import { MenuItem } from "@mui/material";

export const MenuWrapper = styled('div')({
    display: "none",
    "@media (max-width: 768px)": {
        display: 'block'
    }
})

export const MenuContainer = styled(Menu)({
    '& .MuiPaper-root':{
        height: '91.67vh',
        width: '25vw',  
        background: 'linear-gradient(rgba(0, 0, 0, 0.6),  rgba(0, 0, 0, 0.6))',  
    }
})

export const MenuBlock = styled(MenuItem)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

})

export const MenuLink = styled(Link)({
    color: DarkTheme.palette.text.primary,
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '0 1rem',
    height: '100%',
    cursor: 'pointer',
    '&:active':{
        borderBottom: '3px solid blue'
    }
})