function Deposite(){
    let deposite = 1000;
    return deposite;
}

function total(dep){
    let existing = 4000
    console.log("Total after deposite : "+ (existing+dep))
}

total(Deposite())