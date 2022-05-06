import { createTheme } from "@mui/material";
import {LightPalette, DarkPalette} from "./Palette";
import { responsiveFontSizes } from "@mui/material";

let LightTheme = createTheme({
    palette: LightPalette,
    breakpoints:{
        values:{
            xs: 0,
            sm: 700,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    }
    
})

let DarkTheme = createTheme({
    palette: DarkPalette,
    breakpoints:{
        values:{
            xs: 0,
            sm: 700,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    }
})


LightTheme = responsiveFontSizes(LightTheme)
DarkTheme = responsiveFontSizes(DarkTheme)

// LightTheme.typography.h6 = {
//     fontSize:'1.25rem',
//     '@media (max-size:900px)':{
//         fontSize:'0.1rem'
//     }
// }

// DarkTheme.typography.h6 = {
//     fontSize:'1.25rem',
//     '@media (max-size:900px)':{
//         fontSize:'0.1rem'
//     }
// }
export {LightTheme, DarkTheme }