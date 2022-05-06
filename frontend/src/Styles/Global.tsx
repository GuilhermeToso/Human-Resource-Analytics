import React from 'react'
import GlobalStyles from '@mui/material/GlobalStyles'

const Global = () => {
  return (
    <GlobalStyles
        styles={{
            '*':{
                margin:0,
                padding:0,
                boxSizing:'border-box',
            },
            body: {
              width: '100vw',
              height: '100vh'
            }
        }}
    ></GlobalStyles>
  )
}

export default Global