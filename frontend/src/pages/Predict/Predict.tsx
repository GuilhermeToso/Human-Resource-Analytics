import React from 'react'
import { PredictSection } from '../../components/Components/PredictSection'
import GeneralTemplate from '../../components/Templates'
import { LightTheme } from '../../Styles/Theme'

const Predict = () => {
  return (
    <GeneralTemplate 
      textcolor={LightTheme.palette.text.primary} 
      child={
        <PredictSection 
          Primary={LightTheme.palette.text.primary}
          Secondary={LightTheme.palette.text.secondary}
        />
      }
    ></GeneralTemplate>
  )
}

export default Predict