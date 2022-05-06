import { styled } from "@mui/system";
import { Grid } from "@mui/material";


export const TemplateGrid = styled(Grid,{})({
    position: 'absolute',
    overflowX:'hidden',
    width: '100vw',
    height: '100%',
})


export const HeaderGrid = styled(Grid,{})({
    height:'64px'
})

export const MainGrid = styled(Grid, {})({
    height:'calc(100% - 64px)'
})