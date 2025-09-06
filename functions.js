const a= x => x*x
console.log(a(7))
function add(a,b) {
    return a(2,5)+b
}

const sub=(x,y)=>{
    return x-y
}
console.log(sub(3,2))

console.log(add(sub,6))