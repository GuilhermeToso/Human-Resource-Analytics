import {Typography } from '@mui/material'
import React from 'react'
import { TextColorProp } from '../../../Interfaces'
import { PredictForm } from '../../Blocks/PredictForm'
import { Container } from './PredictionSection.styles'

const PredictSection: React.FC<TextColorProp> = (props) => {
  return (
    <Container>
      <Typography
        variant='h2'
        color={props.Primary}
        align='center'
      >
        Attrition in your Organization?
      </Typography>
      <PredictForm></PredictForm>
    </Container>
  )
}

export default PredictSection