/*const userLeft = false
const userWatchingCatMeme = true
function callbasks(callback, errrorcallback){
    if(userLeft){
       errrorcallback({
        name : 'User left',
        message: ' :('
       })
    }else if (userWatchingCatMeme){
        errrorcallback({
            name : "you are wathcing cat meme",
            message : "Web Dev Simplified <cat"
        })
    }else{
        callback('thumbs up and suscribe')
    }
}

callbasks((message) => {
    console.log('susess: '+ message)
}, (error) => {
    console.log(error.name+' '+error.message)
}
)*/

const userLeft = false
const userWatchingCatMeme = true
function promise(){
    return new Promise ((resolve, reject) => {
        if(userLeft){
            reject({
             name : 'User left',
             message: ' :('
            })
         }else if (userWatchingCatMeme){
             reject({
                 name : "you are wathcing cat meme",
                 message : "Web Dev Simplified <cat"
             })
         }else{
             resolve('thumbs up and suscribe')
         }
    })

}

promise().then((message) => {
    console.log('susess: '+ message)
}).catch((error) => {
    console.log(error.name+' '+error.message)
})
