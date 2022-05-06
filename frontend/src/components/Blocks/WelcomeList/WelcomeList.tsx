import React from 'react'
import {Typography} from '@mui/material'
import { ListItem, List, ListSubItem } from './WelcomeList.styles'
import { DarkTheme } from '../../../Styles/Theme'
import { welcomeListTitle } from './WelcomeList.styles'


const WelcomeList = () => {
  return (
        <List>
            <ListItem>
                <Typography
                    variant='h2'
                    color={DarkTheme.palette.text.primary}
                    align='center'
                >
                    Human Resources Analytics
                </Typography>
            </ListItem>
            <ListItem>
                <Typography
                    variant='h5'
                    color={DarkTheme.palette.text.secondary}
                    align='center'
                >
                    Uncover the factors that lead to employee attrition and predict it through AI
                </Typography>
            </ListItem>
            <ListSubItem>
                <Typography
                    variant='h6'
                    color={DarkTheme.palette.text.secondary}
                    align='center'
                >
                    1. Is your employee happy?
                </Typography>
            </ListSubItem>
            <ListSubItem>
                <Typography
                    variant='h6'
                    color={DarkTheme.palette.text.secondary}
                    align='center'
                >
                    2. Is your employee really involved in their work??
                </Typography>
            </ListSubItem>
            <ListSubItem>
                <Typography
                    variant='h6'
                    color={DarkTheme.palette.text.secondary}
                    align='center'
                >
                    3. Your employee's income really brings satisfaction?
                </Typography>
            </ListSubItem>
        </List>
    )
}

export default WelcomeList