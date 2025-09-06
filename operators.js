let a=10,b=6
console.log(a+b)
console.log(a-b)
console.log(a/b)
console.log(a%b)
console.log(a**b)
a+=2
console.log(a)
a*=3
console.log(a)
a%=4
console.log(a)
a=4, b='4'
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<b)
console.log(a>b)
console.log(a<=b)
console.log(a>=b)


//logical operators
let age=20
console.log(age>=20 && age!=30)
console.log(age<10 || age >30)
console.log(!age)

//string operators
let firstname='prema '
let lastname='kumar'
let fullname=firstname+lastname
console.log(fullname)
let correctname= `hello ${firstname} ${lastname}` 
console.log(correctname)


//ternary operators

age=10
if(age>=18)
    console.log("you can vote")
else
    console.log("you can't vote")
let result=age>=18 ? "you can vote" :"you can't vote"
console.log(result)

//increment and decrement operators
count=5
console.log(count++)
console.log(count)
console.log(++count)

//typeof operators
console.log(typeof count)
console.log(typeof "Giri")
console.log(typeof 2)
