//Premetive Data Types

/*
1. Number
2. BigInt
3. String 
4. Boolean
5. Undefined
6. Null
7. Symbol
*/

let age = 23 //Number
let pi = 3.14 //Float-Point Number
let infinityValue = Infinity //Special Numeric value
let notANumber = NaN //Not a Number
console.log(typeof(age))


let num = 9876543210n // Big int 2^53 - 1 =
console.log(typeof(num))

let uname = "Subankar Dey" //String variable
console.log(typeof(uname))

const state = true //Boolean variable
console.log(typeof(state));

let email //Undefined variable
console.log(typeof(email));

let number = null //Null value and it returns it is an Object
console.log(typeof(number));

/*-----------------------------------------------------------------------------------------------------------------------------*/
//Non Premetive Data Types

/*
1. Object
2. Array
3. Function 
4. Date
5. Map
6. Set
*/

//-----Object-----//
let student = {name: "Subankar Dey", age:22,isGraduate:true}    //Object
console.log(student.name)
student.age = 23    //Modify value
console.log(student.age)

//Iterating using for-in loop
for(let key in student){
    console.log(`${key} : ${student[key]}`)
}

// Iterating using Object.keys()
Object.keys(student).forEach((key)=>{
    console.log(`${key} : ${student[key]}`)
})

//------Array-------//
let arr = [10,20,30,40,50,60]
for(let i = 0; i<arr.length;i++){
    console.log(arr[i])
}

/*---------------------------------------------------------------------------------------------------------------------------*/
//Dynamic Typing

// let value = 1234
// value = "subho@143"

// console.log(typeof(value))
// console.log(value);
