import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { DarkTheme } from '../../../Styles/Theme';
import { ColorProp } from '../../../Interfaces';

export const Nav = styled('nav')(
    {
        display: 'flex',
        justifyContent: 'center',
        zIndex: '12',
        "@media (max-width: 768px)": {
            display: 'none'
        }
    }
)


export const NavLink = styled(Link)<ColorProp>(({textcolor}) => ({
    color: `${textcolor}`,
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '0 1rem',
    height: '100%',
    cursor: 'pointer',
    '&:active':{
        borderBottom: '3px solid blue'
    }
}))

export const NavMenu = styled('div')({
    display:'flex',
    alignItems: 'center',
    marginRight: '-24px'
})
