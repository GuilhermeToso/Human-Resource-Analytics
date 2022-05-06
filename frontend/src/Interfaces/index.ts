export interface ColorProp {
    textcolor:string
}

export interface TextColorProp {
    Primary: string;
    Secondary: string;
}

export interface Label {
    label:string;
    value?:(number | string);
}

export interface FormLabels extends Array<Label>{}

export interface FormField{
    id:number;
    labels?: FormLabels;
    title:string;
    name: string;
    textHelper:string;
}

export interface FormData extends Array<FormField>{}

export interface FormValues {
    [key:string]: (number | string)
}
