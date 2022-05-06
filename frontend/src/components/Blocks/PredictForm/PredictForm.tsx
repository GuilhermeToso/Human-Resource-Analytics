import { Autocomplete, Paper, TextField, Grid, Button } from '@mui/material'
import React, { useState } from 'react'
import { selectLabels } from './utils'
import { formData } from '../../../Data/data'
import { formInitialValues } from '../../../Constants'
import { validationSchema } from '../../../Schemas'
// require('dotenv').config()



const PredictForm = () => {

    const [formValues, setformValues] = useState(formInitialValues)


    const handleInputValue = (e:any) => {
        
        const { name, value } = e.target;
        let newValue: number = 0
        if (typeof formValues[name] === "number"){
            newValue = parseInt(value)
        }
        setformValues({
            ...formValues,
            [name]: newValue
        });
        console.log(formValues)
    }

    // const sendData = () => {
    //     fetch()
    // }

    const handleFormSubmit = async (e: any) => {
        e.preventDefault()
        validationSchema
            .isValid(formValues)
            .then()

    }

    const generateFormElements = () => {
        return formData.map((field, _index) => {
                if ("labels" in field) {
                    return (
                        <Grid item xs={12} sm={6} md={3} lg={2} key={field["name"]}>
                            <Autocomplete
                                options={selectLabels(field["labels"])!}
                                fullWidth
                                renderInput={
                                    (params) => <TextField
                                        {...params}
                                        id={field["name"]}
                                        name={field["name"]}
                                        label={field["title"]}
                                        onChange={handleInputValue}
                                        helperText={field["textHelper"]}
                                    />
                                }
                            />
                        </Grid>
                    )
                } else {
                    return (
                        <Grid item xs={12} sm={6} md={3} lg={2} key={field["name"]}>
                            <TextField                        
                                fullWidth
                                id={field["name"]}
                                key={field["name"]}
                                name={field["name"]}
                                label={field["title"]}
                                onChange={handleInputValue}
                                helperText={field["textHelper"]}
                            >
                            </TextField>
                        </Grid>
                    )
                } 
            }
        )
    }

    // onSubmit={handleFormSubmit}
    return (
        <Paper elevation={3} sx={{marginTop:'36px'}}>
            <form onSubmit={handleFormSubmit} style={{padding:"0 16px"}}>
                <Grid container spacing={1}>
                    {generateFormElements()}
                </Grid>
                <Button color="primary" variant="contained" sx={{width:'50%', marginTop:"18px", marginBottom:"18px", left:"25%"}} type="submit">
                Submit
                </Button>
            </form>
        </Paper>
    )
}

export default PredictForm