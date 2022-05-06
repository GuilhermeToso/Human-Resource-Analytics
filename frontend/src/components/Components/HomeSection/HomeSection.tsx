import React from 'react'
import { WelcomeList } from '../../Blocks/WelcomeList'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Container, Button } from './HomeSection.styles';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';


const HomeSection = () => {

  const navigate = useNavigate()

  function handleClick() {
    navigate("/predict")
  }

  return (
    <Container>
      <WelcomeList></WelcomeList>
      <Button 
        onClick={handleClick}
        variant='contained' 
        endIcon={<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>}
      >
        
        <Typography
          variant='h6'
        
        >
          Predict Here
        </Typography>
      </Button>
    </Container>
  )
}

export default HomeSection