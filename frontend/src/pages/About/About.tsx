import React from 'react'
import { AboutSection } from '../../components/Components/AboutSection'
import GeneralTemplate from '../../components/Templates'
import { LightTheme } from '../../Styles/Theme'
// import { aboutStyle } from './About.styles'

const About = () => {
  return (
    <GeneralTemplate 
      textcolor={LightTheme.palette.text.primary} 
      child={
        <AboutSection 
          Primary={LightTheme.palette.text.primary}
          Secondary={LightTheme.palette.text.secondary}
        />
      }
      // styles={aboutStyle}
    ></GeneralTemplate>
  )
}

export default About