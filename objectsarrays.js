// class person={
//     constructor={
//         this.name:name,
//         this.marks:marks,
//     };
// }
/*console.log(person.name)
console.log(person["age"])
const {name,age}=person; //destructuring assignment
console.log(name)
console.log(age)

let numbers=[2,7,9,8,3]
console.log(numbers)
let square=numbers.map((num)=>num*num);//apply for all elements in numbers array
console.log(square[0])
console.log(numbers.filter((num)=>num%2==0))
let sum=numbers.reduce((a,b)=>a-b,0)
console.log(sum)*/
let arr=[
    {
        name:"giri",
        marks:78
    },
    {
        name:"Prasad",
        marks:99
    },
    {
        name:"prem",
        marks:900
    }
]
let m=0,j=0
let high=""
let i={}
for(i of arr){
    j= i.marks
    console.log(j,m)
        if(m<j){
            high=i.name
            m=j
        }
}
console.log(high+" is topper ")
    