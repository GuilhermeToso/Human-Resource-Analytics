import React from 'react'
import { TextColorProp } from '../../../Interfaces'
import { Container, Grid, Avatar, Typography, Divider, ButtonGroup, IconButton } from '@mui/material'
import MyPhoto from '../../../Assets/Images/me.jpg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const AuthorSection: React.FC<TextColorProp> = (props) => {
  return (
    <Container>
      <Grid container >
        <Grid item container xs={12} justifyContent="center" alignItems="center" sx={{padding:"5% 0"}}>
          <Grid item xs={12}>
            <Typography variant='h3' fontWeight={300} color={props.Primary} align="center">
              Meet the Author
            </Typography>  
          </Grid>
          <Grid item xs={5}>
            <Divider variant='middle'></Divider>
          </Grid>
        </Grid> 
        <Grid item container justifyContent="center" sm={6} xs={12} sx={{padding:"5% 0"}}>
          <Avatar
            alt="Guilherme Toso"
            src={MyPhoto}
            sx={{height:'256px', width:'256px'}}
          >
          </Avatar>
        </Grid>
        <Grid item sm={6} xs={12} sx={{padding:"5% 0"}}>
          <Typography
            variant='h3'
            color={props.Primary}
          >
           Guilherme M. Toso
          </Typography>
          <Typography
            variant='h6'
            color={props.Secondary}
            sx={{paddingTop:'5%'}}
          >
           Hello! I'm a Data enthusiastic and a Fullstack developer. My professional goal 
           is build Data Products by means of Data Science and Machine Learning to bring 
           solutions for business problems.
          </Typography>
          <ButtonGroup size='large'>
            <IconButton
             color="primary" 
             aria-label="facebook"
             size='large'
            >
              <FacebookOutlinedIcon></FacebookOutlinedIcon>
            </IconButton>
            <IconButton
             color="primary" 
             aria-label="instagram"
             size='large'
            >
              <InstagramIcon></InstagramIcon>
            </IconButton>
            <IconButton
             color="primary" 
             aria-label="github repository"
             size='large'
            >
              <GitHubIcon/>
            </IconButton>
            <IconButton
             color="primary" 
             aria-label="linkedin"
             size='large'
            >
              <LinkedInIcon></LinkedInIcon>
            </IconButton>
            <IconButton
             color="primary" 
             aria-label="portfolio"
             size='large'
            >
              <BusinessCenterIcon/>
            </IconButton>
          </ButtonGroup>

        </Grid>
      </Grid>
        
    </Container>
  )
}

export default AuthorSection