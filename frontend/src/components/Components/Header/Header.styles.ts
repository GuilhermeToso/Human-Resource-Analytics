import styled from "@emotion/styled"
import { Toolbar } from "@mui/material"

export const headerStyles = {
    background: 'linear-gradient(rgba(0, 0, 0, 0.3),  rgba(0, 0, 0, 0.3))',
    height: '64px',
}

export const ToolBar = styled(Toolbar)({
    '@media (min-width:600px)': {
        paddingRight:'48px',
    }
})