import * as yup from 'yup'
import { Label } from '../../../Interfaces'
import { FormLabels } from '../../../Interfaces'

function isValueKey(formLabel: Label[]) {
    return formLabel.map((value: Label) => {
        if ("value" in value){
            return {"label":value["value"]}
        } else {
            return {"label":value["label"]}
        }
    }) 
}


function selectLabels(formLabel: FormLabels | undefined) {
    if (formLabel){
        return formLabel.map((value: Label) => {
            return value.label
            }    
        ) 
    } else {
        return 
    }
}

// async function handleSubmit(e: Event) {
//     e.preventDefault()
//     if(!(await validateForm())) return
//     console.log("hi")
// }

// async function validateForm() {
//     let schema = yup.object().shape({
        
//     })
// }

export {isValueKey, selectLabels}