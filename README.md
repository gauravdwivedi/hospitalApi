# hospitalApi

## Application to register Doctor and patient to track reports

###### Doctor can register patients and create their reports

## to install all neccessary dependencies 
-[] npm install

## Run nodemon server.js to start server
> nodemon server.js

## Routes
## to register a doctor
###### http://localhost:3000/api/v1/doctors/register

```
{
"username" : "doctor's Name",
"email" : "doctor's email",
"password" : password
}
```

## to login a doctor

###### http://localhost:3000/api/v1/doctors/register

```
{
"email": "doctor's email"
"password" : password
}
```

## login will return a jwt which is require to make restricted page access

## to register a patient
###### http://localhost:3000/api/v1/patients/register

## inside header 

*bearer token*

## to create report 
###### http://localhost:3000/api/v1/patients/:id(patient's id)/create_report
## report needs status from enum Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit].

