let marks=85
if (marks>=90)
    console.log(" A+ Grade")
else if(marks>=80)
    console.log("A Grade")
else if(marks>=70)
    console.log("B+ grade")
else 
    console.log("fail")

let day=5
switch(day){
    case 1:
        console.log("Sunday")
        break
    case 2:
        console.log("Monday")
        break
    case 3:
        console.log("Tuesday")
        break
    case 4:
        console.log("Wednesday")
        break
    case 5:
        console.log("thursday")
        break
    case 6:
        console.log("friday")
        break
    case 7:
        console.log("Saturday")
        break
}

n=30
for(i=0;i<n;i++)
    console.log(i)
i=0
while(i<n)
    console.log(i++)

let colors=["Red","Blue","Green","Orange"]
for(i=0;i<colors.length;i++)
    console.log(colors[i])

 let person={
    name:"Giri",
    age: 18,
    college: "jntugv"
 }

 for(let key in person){
    console.log(`${key} : ${person[key]}`)
 }
