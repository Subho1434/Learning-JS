console.log("Hello This is Subho");
const accountNumber = 123456 //constant variable cannot be redeclared or updataable
let emailId = "subho@gmail.com" //let variable cannot be redeclared but it is updateable
var name = "Subankar Dey" //var variable cannot be redeclared and updateable

console.log("First Output : ")
console.table([accountNumber, emailId, name])

//const accountNumber = 54321 //theow error
//let emailId = "jenson@gmail.com" //throw error
emailId = "jenson@gmail.com"
var name = "Jenson Moses" //Try to not use var because it will be redeclared and update & change anywhere

console.log("Second Output : ")
console.table([emailId, name])
