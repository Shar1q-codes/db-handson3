const mongoose = require("mongoose")

const url = "mongodb://127.0.0.1:27017/Human_resource"

const dbSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  salary: Number,
  department: String,
  lastCompany: String,
  lastSalary: Number,
  overallExp: Number,
  contactInfo: Number,
  yearGrad: Number,
  gradStream: String
})

var rec1 = [{"firstName": "John",
"lastName": "Doe",
"salary": "25000",
"department": "HR",
"lastCompany": "X",
"lastSalary": "10000",
"overallExp": "2",
"contactInfo": "1234567890",
"yearGrad": "2016",
"gradStream": "CSE"
},{
"firstName": "Rohan",
"lastName": "Jame",
"salary": "30000",
"department": "Technical",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "1",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "20000",
"overallExp": "1",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "ECE"
},
{
"firstName": "Sao",
"lastName": "Avika",
"salary": "30000",
"department": "Sales",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "roh",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "EEE"
},
{
"firstName": "Rohan",
"lastName": "Jame",
"salary": "30000",
"department": "Technical",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "1",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "20000",
"overallExp": "1",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "ECE"
},
{
"firstName": "Sao",
"lastName": "Avika",
"salary": "30000",
"department": "Sales",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "EEE"
},
{
"firstName": "Rohan",
"lastName": "Jame",
"salary": "30000",
"department": "Technical",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "1",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "20000",
"overallExp": "1",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "ECE"
},
{
"firstName": "Sao",
"lastName": "Avika",
"salary": "30000",
"department": "Sales",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "EEE"
}]

//connection to database

mongoose.connect(url,async(err,connection)=>{
    if(err) console.log(err);
    else console.log("Connection successful")
  
  //creating collections

    const employee = mongoose.model("employee",dbSchema);
  
  //inserting documents
  
    // const insert = employee.insertMany(rec1);
    // console.log(insert);
  
  //display all the documents
  
  
    const docs = await employee.find({});
    console.log(docs);
  
  // salary graterthan 30000

    // const salgt = {salary:{$gt:30000}}
    // const salgrater = await employee.find(salgt);
    // console.log(salgrater)
  
  //experience morethan 2
  
  
    // const expgt = {overallExp:{$gt:2}};
    // const experiencegt = await employee.find(expgt);
    // console.log(experiencegt);
  
  //year graterthan 2015 and experience morethan 1

    // const grdgt = {yearGrad:{$gt:2015},overallExp:{$gt:1}};
    // const gebgt = await employee.find(grdgt);
    // console.log(gebgt);
  
  //updating salary greaterthan 70000- 65000

    // const salup = {salary:{$gt:70000}}
    // const salaup = {$set:{salary:65000}}
    // const salaupdate = await employee.updateMany(salup,salaup);
    // console.log(salaupdate);
  
  //deleting document having lastcompany Y

    // const empdel = {lastCompany:"Y"};
    // const empdelete = await employee.deleteMany(empdel);
    // console.log(empdelete)
})

// const employee = mongoose.model("employee",dbSchema);