import React from 'react'
import GeneralTemplate from '../../components/Templates'
import { HomeSection } from '../../components/Components/HomeSection'
import { homeStyle } from './Home.styles'
import { DarkTheme } from '../../Styles/Theme'

const Home = () => {
    return (
        <GeneralTemplate 
            textcolor={DarkTheme.palette.text.primary} 
            child={<HomeSection/>} 
            styles={homeStyle}>
        </GeneralTemplate>
    )
}

export default Home