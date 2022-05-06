import { Grid } from '@mui/material'
import React from 'react'
import { Header } from '../Components/Header'
import {TemplateGrid, HeaderGrid, MainGrid} from './Template.styles'

interface ParentProps {
  child?: React.ReactNode,
  styles?: object,
  textcolor: string
}



const GeneralTemplate: React.FC<ParentProps> = (props) => {
  return (
    <TemplateGrid 
        container
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={0} 
        sx={props.styles}
    >
        <HeaderGrid item xs={12}><Header textcolor={props.textcolor}/></HeaderGrid>
        <MainGrid item xs={12}>{props.child}</MainGrid>
    </TemplateGrid>
  )
}

export default GeneralTemplate