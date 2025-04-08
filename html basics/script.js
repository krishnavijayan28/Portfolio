document.write("hi krishna")

console.warn("this is a warning")
console.error("there is an error")

//variables
const pi=3.14
console.log(pi)

let a=10
console.log(a)

var b=19
console.log(b)

var b=40
console.log(b)

let isValid=false
let fullname="Adam John"
let salary=40000

let num1=2
num1+=3
console.log(num1)



let a1=num1++
console.log(a1)
++a1
console.log(a1)

let flag1=true
let flag2=false
console.log((flag1!=flag2)|| (2==3))
console.log((flag1!=flag2)&& (2==3))

if(2>3)
    console.log("2 is greater than 3")
else if(2<3)
    console.log("2 is less than 3")
else
    console.log("both are equal")
let student={
    name:"priya",
    age:20,
    hobby:"movie"
}
console.log(student.name)
function define(){
    console.log("welcome Krishna Vijayan")
}
define()
function add(a,b){
    return a+b
}
let result=add(4,5)
console.log(result)

let diff=(num1,num2)=>{
    return num1-num2
}
let output=diff(5,4)
console.log(output)

const seasons=["winter","summer","rainy"]
console.log(seasons[2])

seasons.forEach((item)=>console.log(item))