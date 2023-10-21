console.log("I am a JS file for Indiex.HTML")
console.log(document)
console.log(document.getElementsByTagName('h1')[0])

function change(){
    console.log("Button clicked")
    document.write("Button Clicked")
}

function clicked(){
    document.write("clicked")
}

/*function userDataIn(e){
    console.log(e.target.value) // we use target to check that is our input method is working or not 
    let InputValue = e.target.value
    document.getElementById('output').innerHTML = InputValue
}*/

let txtbox = document.querySelector("#text-box")
let output = document.querySelector("#output")
txtbox.addEventListener('keydown' ,event=>output.innerText  = event.key) 