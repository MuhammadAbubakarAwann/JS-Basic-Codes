for(let i=0; i<5;i++){
   console.log(i)

    
}
for(let i=1; i<=5; i++){

let spaces = " ".repeat(5-i)
let stars = "*".repeat(2 * i - 1)

console.log(spaces + stars)
}


//while loop

i=0
while(i<5){
    console.log(i)
    i++
}

//do while

do{
    console.log("i")
    i++
}while(i<5)