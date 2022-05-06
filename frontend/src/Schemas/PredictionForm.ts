import * as yup from 'yup'


const ageSchema = yup
    .number()
    .required("Age is required.")
    .integer("Age must be of type integer.")
    .positive("Age must be positive.")

const businessTravelSchema = yup
    .string()
    .required("Business Travel is required.")

const dailyRateSchema = yup
    .number()
    .required("Daily Rate is required.")
    .positive("Daily Rate must be positive.")

const departmentSchema = yup
    .string()
    .required("Department is required.")
    
const distanceFromHomeSchema = yup
    .number()
    .required("Distance from home is required.")
    .integer("Distance from home must be of type integer.")
    .positive("Distance from home must be positive.")

const educationSchema = yup
    .string()
    .required("Education is required.")

const educationFieldSchema = yup
    .string()
    .required("Education Field is required.")

const environmentSatisfactionSchema = yup
    .string()
    .required("Environment Satisfaction is required.")

const genderSchema = yup
    .string()
    .required("Gender is required.")

const hourlyRateSchema = yup
    .number()
    .required("Hourly Rate is required.")
    .positive("Hourly Rate must be positive.")

const jobInvolvementSchema = yup
    .string()
    .required("Job Involvement is required.")

const jobLevelSchema = yup
    .string()
    .required("Job Level is required.")

const jobRoleSchema = yup
    .string()
    .required("Job Role is required.")

const jobSatisfactionSchema = yup
    .string()
    .required("Job Satisfaction is required.")

const maritalStatusSchema = yup
    .string()
    .required("Marital Status is required.")

const monthlyIncomeSchema = yup
    .number()
    .required("Monthly Income is required.")
    .positive("Monthly Income must be positive")

const monthlyRateSchema = yup
    .number()
    .required("Monthly Rate is required.")
    .positive("Monthly Rate must be positive")

const numCompaniesWorkedSchema = yup
    .number()
    .required("The Number of Companies Worked is required.")
    .integer("The Number of Companies Worked must be of type integer.")
    .positive("The Number of Companies Worked must be positive.")

const overTimeSchema = yup
    .string()
    .required("Over Time is required.")

const percentSalaryHikeSchema = yup
    .number()
    .required("Percent Salary Hike is required.")
    .positive("Percent Salary Hike must be positive.")

const performanceRatingSchema = yup
    .string()
    .required("Performance Rating is required.")

const relationshipSatisfactionSchema = yup
    .string()
    .required("Relationship Satisfaction is required.")

const stockOptionLevelSchema = yup
    .string()
    .required("Stock Option Level is required.")

const totalWorkingYearsSchema = yup
    .number()
    .required("The Total Working Years is required.")
    .integer("The Total Working Years must be of type integer.")
    .positive("The Total Working Years must be positive.")    

const trainingTimeLastYearSchema = yup
    .number()
    .required("The Training Time Last Year is required.")
    .integer("The Training Time Last Year must be of type integer.")
    .positive("The Training Time Last Year must be positive.") 

const workLifeBalanceSchema = yup
    .string()
    .required("Work-Life Balance is required.")

const yearsAtCompanySchema = yup
    .number()
    .required("The Years At Company is required.")
    .integer("The Years At Company must be of type integer.")
    .positive("The Years At Company must be positive.") 

const yearsInCurrentRoleSchema = yup
    .number()
    .required("The Years in Current Role is required.")
    .integer("The Years in Current Role must be of type integer.")
    .positive("The Years in Current Role must be positive.") 

const yearsSinceLastPromotionSchema = yup
    .number()
    .required("The Years Since Last Promotion is required.")
    .integer("The Years Since Last Promotion must be of type integer.")
    .positive("The Years Since Last Promotion must be positive.") 

const yearsWithCurrManagerSchema = yup
    .number()
    .required("The Years With Current Manager is required.")
    .integer("The Years With Current Manager must be of type integer.")
    .positive("The Years With Current Manager must be positive.") 

export const validationSchema = yup.object().shape({
    age: ageSchema,
    businessTravel: businessTravelSchema,
    dailyRate: dailyRateSchema,
    department: departmentSchema,
    distanceFromHome: distanceFromHomeSchema,
    education: educationSchema,
    educationField: educationFieldSchema,
    environmentSatisfaction: environmentSatisfactionSchema,
    gender: genderSchema,
    hourlyRate: hourlyRateSchema,
    jobInvolvement: jobInvolvementSchema,
    jobLevel: jobLevelSchema,
    jobRole: jobRoleSchema,
    jobSatisfaction: jobSatisfactionSchema,
    maritalStatus: maritalStatusSchema,
    monthlyIncome: monthlyIncomeSchema,
    monthlyRate: monthlyRateSchema,
    numCompaniesWorked: numCompaniesWorkedSchema,
    overTime: overTimeSchema,
    percentSalaryHike: percentSalaryHikeSchema,
    performanceRating: performanceRatingSchema,
    relationshipSatisfaction: relationshipSatisfactionSchema,
    stockOptionLevel: stockOptionLevelSchema,
    totalWorkingYears: totalWorkingYearsSchema,
    trainingTimeLastYear: trainingTimeLastYearSchema,
    workLifeBalance: workLifeBalanceSchema,
    yearsAtCompany: yearsAtCompanySchema,
    yearsInCurrentRole: yearsInCurrentRoleSchema,
    yearsSinceLastPromotion: yearsSinceLastPromotionSchema,
    yearsWithCurrManager: yearsWithCurrManagerSchema
})
