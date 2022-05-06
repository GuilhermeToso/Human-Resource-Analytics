import { FormData } from "../Interfaces"

export const formData: FormData = [
    {
        id:1,
        title:"Age",
        name:"age",
        textHelper:"The employee age."
    },
    {
        id:2,
        labels:[
            {label: "Frequently", value: "Travel_Frequently"},
            {label: "Rarely", value: "Travel_Rarely"},
            {label: "No Travel", value: "Non-Travel"}
        ],
        title:"Business Travel",
        name:"businessTravel",
        textHelper: "Employee travel frequency for the company."
    },
    {
        id:3,
        title:"Daily Rate",
        name:"dailyRate",
        textHelper:"Cost of services provided for a single day."
    },
    {
        id:4,
        labels:[
            {label:"Human Resources"},
            {label:"Research & Development"},
            {label:"Sales"}
        ],
        title:"Department",
        name:"department",
        textHelper:"Employee's job department"
    },
    {
        id:5,
        title:"Distance From Home",
        name:"distanceFromHome",
        textHelper:"The distance from work to home."
    },
    {
        id:6,
        labels:[
            {label:"Bellow College", value:1},
            {label:"College", value:2},
            {label:"Bachelor", value:3},
            {label:"Master", value:4},
            {label:"Doctor", value:5}
        ],
        title:"Education",
        name:"education",
        textHelper: "The employee education level."
    },
    {
        id:7,
        labels:[
            {label:"Human Resources"},
            {label:"Marketing"},
            {label:"Medical"},
            {label:"Life Sciences"},
            {label:"Other"},
            {label:"Technical Degree"}
        ],
        title:"Education Field",
        name:"educationField",
        textHelper:"The employee education degree field."
    },
    {
        id:8,
        labels:[
            {label:"Low", value:1},
            {label:"Medium", value:2},
            {label:"High", value:3},
            {label:"Very High", value:4}
        ],
        title:"Environment Satisfaction",
        name:"environmentSatisfaction",
        textHelper:"Employee's satisfaction with his/her job environment."
    },
    {
        id:9,
        labels:[
            {label:"Female"},
            {label:"Male"}
        ],
        title:"Gender",
        name:"gender",
        textHelper:"Employee gender"
    },
    {
        id:10,
        title:"Hourly Rate",
        name:"hourlyRate",
        textHelper:"Cost of services provided for an hour."
    },
    {
        id:11,
        labels:[
            {label:"Low", value:1},
            {label:"Medium", value:2},
            {label:"High", value:3},
            {label:"Very High", value:4}
        ],
        title:"Job Involvement",
        name:"jobInvolvement",
        textHelper:"The employee involvement at the job."
    },
    {
        id:12,
        labels:[
            {label:"Very Low", value:1},
            {label:"Low", value:2},
            {label:"Medium", value:3},
            {label:"High", value:4},
            {label:"Very High", value:5}
        ],
        title:"Job Level",
        name:"jobLevel",
        textHelper: "The employee level of the job."
    },
    {
        id:13,
        labels:[
            {label:"Healthcare Representative"},
            {label:"Human Resources"},
            {label:"Laboratory Technician"},
            {label:"Manager"},
            {label:"Manufacturing Director"},
            {label:"Research Director"},
            {label:"Research Scientist"},
            {label:"Sales Executive"},
            {label:"Sales Representative"}
        ],
        title:"Job Role",
        name:"jobRole",
        textHelper: "The emplyee job role."
    },
    {
        id:14,
        labels:[
            {label:"Low", value:1},
            {label:"Medium", value:2},
            {label:"High", value:3},
            {label:"Very High", value:4}
        ],
        title:"Job Satisfaction",
        name:"jobSatisfaction",
        textHelper:"Employee's satisfaction with his/her job."
    },
    {
        id:15,
        labels:[
            {label:"Divorced"},
            {label:"Married"},
            {label:"Single"}
        ],
        title:"Marital Status",
        name:"maritalStatus",
        textHelper:" The employee mariage status."
    },
    {
        id:16,
        title:"Monthly Income",
        name:"monthlyIncome",
        textHelper:"The employee monthly salary."
    },
    {
        id:17,
        title:"Monthly Rate",
        name: "monthlyRate",
        textHelper:"The employee monthly rate."
    },
    {
        id:18,
        title:"Nº Companies Worked",
        name:"numCompaniesWorked",
        textHelper:"Number of companies that the employee already worked on."
    },
    {
        id:19,
        labels:[
            {label:"No", value:0},
            {label:"Yes", value:1}
        ],
        title:"Over Time",
        name: "overTime",
        textHelper:"If the employee works extra time."
    },
    {
        id:20,
        title:"Percent Salary Hike",
        name:"percentSalaryHike",
        textHelper:"Percentage Increase in Salary."
    },
    {
        id:21,
        labels:[
            {label:"Low", value:1},
            {label:"Good", value:2},
            {label:"Excellent", value:3},
            {label:"Outstanding", value:4}
        ],
        title:"Performance Rating",
        name:"performanceRating",
        textHelper:"The employee performance rating."
    },
    {
        id:22,
        labels:[
            {label:"Low", value:1},
            {label:"Medium", value:2},
            {label:"High", value:3},
            {label:"Very High", value:4}
        ],
        title:"Relationship Satisfaction",
        name:"relationshipSatisfaction",
        textHelper:"The employee satisfaction with the work relations."
    },
    {
        id:23,
        labels:[
            {label:"5000", value:0},
            {label:"10000", value:1},
            {label:"15000", value:2},
            {label:"20000", value:3}
        ],
        title:"Stock Option Level",
        name:"stockOptionLevel",
        textHelper:"Plans that the company offers to employees to acquire their shares."
    },
    {
        id:24,
        title:"Total Working Years",
        name:"totalWorkingYears",
        textHelper:"Total years worked."
    },
    {
        id:25,
        title:"Training Time Last Year",
        name:"trainingTimeLastYear",
        textHelper:"Hours spent training."
    },
    {
        id:26,
        labels:[
            {label:"Bad", value:1},
            {label:"Good", value:2},
            {label:"Better", value:3},
            {label:"Best", value:4}
        ],
        title:"Work-Life Balance",
        name:"workLifeBalance",
        textHelper:"Time spent between work and outside."
    },
    {
        id:27,
        title:"Years At Company",
        name:"yearsAtCompany",
        textHelper:"Total number of years at the company."
    },
    {
        id:28,
        title:"Years In Current Role",
        name: "yearsInCurrentRole",
        textHelper:"Years in current role."
    },
    {
        id:29,
        title:"Years Since Last Promotion",
        name:"yearsSinceLastPromotion",
        textHelper:"Years since the last promotion."
    },
    {
        id:30,
        title:"Years With Curr Manager",
        name:"yearsWithCurrManager",
        textHelper:"Years spent with the current manager."
    }
]