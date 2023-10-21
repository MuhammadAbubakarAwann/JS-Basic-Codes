function notifyMe(){
    alert("notification is present")
    Notification.requestPermission()
    .then((userPermission)=>{
        console.log(userPermission)

        if(userPermission === "default")
        {
            alert("Please provide permission")
        }else{
            new Notification('New mail',{body : 'you have a new Notiication'})
        }
    })
}