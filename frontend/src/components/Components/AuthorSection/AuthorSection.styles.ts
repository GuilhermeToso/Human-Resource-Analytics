import { styled } from "@mui/system";
import { Grid } from "@mui/material";


export const AuthorTitleGrid = styled(Grid,{})({
    height:'16.66vh',
    width:'100%',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'

})

export const AuthorGrid = styled(Grid,{})({
    flexDirection:"column",
    height: 'calc(100% - 16.66vh)',
    '@media (max-width:600px)':{
        flexDirection:"row"   
    }
})

export const AvatarGrid = styled(Grid,{})({
    
})