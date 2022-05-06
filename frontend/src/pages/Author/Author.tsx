import React from 'react'
import { AuthorSection } from '../../components/Components/AuthorSection'
import GeneralTemplate from '../../components/Templates'
import { LightTheme } from '../../Styles/Theme'
import { authorStyle } from './Author.styles'

const Author = () => {
  return (
    <GeneralTemplate 
      textcolor={LightTheme.palette.text.primary} 
      child={
        <AuthorSection 
          Primary={LightTheme.palette.text.primary}
          Secondary={LightTheme.palette.text.secondary}
        />
      }
      styles={authorStyle}
    ></GeneralTemplate>
  )
}

export default Author