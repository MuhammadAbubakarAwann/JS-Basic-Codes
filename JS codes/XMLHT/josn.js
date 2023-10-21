let car = {
    id : 89,
    type : "primary"
}

console.log(JSON.stringify(car))
let str = JSON.stringify(car)
console.log(typeof str)


let string = '{"id":12, "type":"secondary"}'
let jsonstr = JSON.parse(string)
console.log(jsonstr)
console.log(typeof jsonstr)