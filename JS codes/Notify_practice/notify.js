function notifyMe(){
    alert("Will notify here")
    Notification.requestPermission()

    .then((userPermession)=>{
        console.log(userPermession)

        if(userPermession === 'default'){
            console.log("Please Give permission")
        }else{
            new Notification('New mail' ,{body: 'Hello Abubakar, new Notification!'})
        }
    })
}