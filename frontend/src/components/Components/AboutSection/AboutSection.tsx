import { Grid, Container, Typography, IconButton, Box} from '@mui/material'
import React from 'react'
import { TextColorProp } from '../../../Interfaces'
import { TitleGrid, TitleContainer } from './AboutSection.styles'
import { DarkTheme, LightTheme } from '../../../Styles/Theme'
import GitHubIcon from '@mui/icons-material/GitHub'

const AboutSection: React.FC<TextColorProp>= (props) => {
  return (
    <Grid
        container
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={0}
    >
        <TitleGrid item xs={12} >
            <TitleContainer>
                <Typography 
                    variant='h1'
                    color={DarkTheme.palette.text.secondary}
                    align='center'
                >
                    The Project
                </Typography>  
            </TitleContainer>
        </TitleGrid>
        <Grid item xs={12}>
            <Container>
                <Typography
                    variant='h3'
                    color={LightTheme.palette.text.secondary}
                    align='center'
                    sx={{paddingTop:'5%'}}
                >
                    Human Resources Analytics
                </Typography>
                <Typography
                    variant="h6"
                    color={LightTheme.palette.text.secondary}
                    align='center'
                    sx={{padding:'5% 10%'}}
                >
                This Data Science project has focus on analyze and predict which employees
                    has more probability of leaving the company. The context is completely fictious, 
                    the company, the CEO and the business questions. The HR department of the company  
                    <strong> AI Diagnostics</strong>, collected data from employees and would like 
                    the team of data scientists to analyze and predict which employees are more likely
                    to leave their jobs. So that the company can offer benefits to these employees and 
                    with the intention of keeping them in the company.
                </Typography>
                <Typography
                    variant="h6"
                    color={LightTheme.palette.text.secondary}
                    align='center'
                    sx={{padding:'0px 10%'}}
                >
                The data we are working on is a fictional dataset created by the IBM data 
                scientists and it can be found at the kaggle website: <a href="https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset">
                IBM HR Analytics Employee 
                Attrition & Performance</a>. The features we will work on are like job involvment, 
                education, job satisfaction, performance metrics, relationship, balance between personal 
                and professional activities, and so many others.
                </Typography>
                <Typography
                    variant="h6"
                    color={LightTheme.palette.text.secondary}
                    align='center'
                    sx={{paddingTop:'5%', paddingLeft:'10%',paddingRight:'10%'}}
                >
                For more details about the project, please visit it's gthub page.
                </Typography>
                <Box sx={{display:"flex", alignItens:"center", justifyContent:"center"}}>
                <IconButton 
                    color="primary" 
                    aria-label="github repository"
                    size='large'
                >
                    <GitHubIcon fontSize='medium'/>
                </IconButton>

                </Box>
            </Container>
        </Grid>  
    </Grid>
    )
}

export default AboutSection