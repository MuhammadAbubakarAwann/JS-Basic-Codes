let p = new Promise((rresolve, reject) => {
    let a = 1 + 1
    if(a == 2){
        rresolve('success')
    }else{
        reject('Failed')
    }
})

p.then((msg) => {
    console.log("this is a  success msg,This is in then " +msg)
})
.catch((msg) => {
    console.log("This is a failure msg, This is in catch  " + msg)
})