import styled from "@emotion/styled";
import { ListItem as Item } from "@mui/material";
import { List as ListBlock } from "@mui/material";

export const List = styled(ListBlock)({
    paddingTop:'48px',
    '@media (min-width:600px) and (max-height:600px)':{
        paddingTop:'16px'
    }
    
})

export const ListItem = styled(Item)({
    justifyContent:'center',
    backgroundCsolor: 'blue',
    paddingTop:'42px',
    paddingBottom:'42px',
    '@media (min-width:600px) and (max-height:600px)':{
        paddingTop:'16px',
        paddingBottom:'16px'
    } 

})

export const ListSubItem = styled(Item)({
    justifyContent:'center',
    backgroundCsolor: 'blue',
    paddingTop:'16px',
    paddingBottom:'16px',
    '@media (min-width:600px) and (max-height:600px)':{
        paddingTop:'8px',
        paddingBottom:'8px'
    } 

})

export const welcomeListTitle = {
    md:'h2',
    xs:'h6'
}