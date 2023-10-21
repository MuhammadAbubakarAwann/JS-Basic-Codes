function validate(){
    console.log()
    let name = document.register.name.value
    let email = document.register.email.value
    let mobile = document.register.mobile.value
    let gender = document.register.gender.value
    let religion = document.register.religion.value
    let language = document.register.language

    if(name.length <= 0){
        alert("Please provide your Name.")
        return false
    }else if(email.length <= 0){
        alert('please enter a valid Email')
        return false
    }else if(mobile.length <= 0){
        alert('please enter a valid Mobile')
        return false
    }else if(gender.length <= 0){
        alert('please select a gender')
        return false
    }
    else if(religion.value === 'no'){
        alert('please select a religion')
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