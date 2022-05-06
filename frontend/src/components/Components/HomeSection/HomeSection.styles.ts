import styled from "@emotion/styled";
import { Container as Wrapper } from "@mui/material";
import { Button as CTAButton } from "@mui/material";
import { blue } from '@mui/material/colors';

export const Container = styled(Wrapper)({
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center'
})


export const Button = styled(CTAButton)({
    width:'35%',
    height: '48px',
    backgroundColor: blue[500] 
})