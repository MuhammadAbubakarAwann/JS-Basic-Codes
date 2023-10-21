
//toString
let c = 123;
console.log(typeof c)
let cc = c.toString()
console.log(typeof cc)
console.log(cc)


//fixed
let value = 4.4321
let fx1= value.toFixed(1)
let fx2= value.toFixed(2)
let fx3= value.toFixed(3)

console.log(fx1)
console.log(fx2)
console.log(fx3)


 //toPresision
let value1 = 4.3231
let pr1 = value1.toPrecision(1)
let pr2 = value1.toPrecision(2)
let pr3 = value1.toPrecision(3)
console.log(pr1)
console.log(pr2)
console.log(pr3)

//toExponent
let value3 = 48384
let ex1 = value3.toExponential() ;
console.log(ex1)



// Strings in Js

let str1 = "Hello";
let str2 = "I am";
let str3 = "Abubakar";

console.log(str1 + str2 + str3);

//slicing a string

let string = "i am abubakar";
let slice = string.slice(3)
console.log("Slice is : ", slice )  ;

let slice2 = string.slice(3,9);
console.log('Slice of the second index to ninth index : ', slice2 );

//search

let d = "abubakar";
console.log(d.search("r"))
console.log(d.search("n"))


//position

console.log(d.charAt(4))


//spliting

let sp = "abubakar"
let splitString = sp.split("k")
console.log(splitString)
console.log(typeof splitString)

//replace

let str = "Hi ali, how are You?"
let ReStr = str.replace("ali", "Abubakar")
console.log(ReStr)

//symbol datatype

let s1 = "hi"
let s2 = "hi"
console.log(s1 == s1)

let sy1 = Symbol("hi")
let sy2 = Symbol("hi")
console.log(sy1 === sy2)