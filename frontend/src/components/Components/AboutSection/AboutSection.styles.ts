import { styled } from '@mui/system'
import { Grid, Container } from '@mui/material'
import Image from  '../../../Assets/Images/bg.jpg'


export const TitleGrid = styled(Grid,{})({
    position:'relative',
    height: '25vh',
    alignItems: 'center',
    justifyContent:'center',
    background: `linear-gradient(rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0.5)), url(${Image})`,
    backgroundSize:'cover'
})

export const TitleContainer = styled(Container,{})({
    position: 'relative',
    height:'100%',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'
})

// export const aboutSecStyle = {
//     // position: 'relative',
//     // width: '100vw',
//     // height: '100%',
//     background: `linear-gradient(rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0.5)), url(${Image})`,
//     backgroundSize:'cover',
// }

