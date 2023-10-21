function validate(){
    
    let name = document.register.name.value
    let email = document.register.email.value
    let mobile = document.register.mobile.value
    /*let gender = document.register.gender.value
    let language = document.register.language*/


    if(name.length <= 0){
        alert("Please Enter Your Name")
        return false
    }else if(email.length <= 0){
        alert("Please Enter Your correct Email")
        return false
    }else if(mobile.length <= 0){
        alert("Please Enter Your correct Mobile Number")
        return false
    }else if(gender.length <= 0){
        alert('please select a gender')
        return false
    }
    

    let check = false
    for(i=0; i<4; i++){
        if(language[i].checked){
            check = true
        }
    }

    if(check == false){
        alert('please select a language')
    }
    return false;


}

