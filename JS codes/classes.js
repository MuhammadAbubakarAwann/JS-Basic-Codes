class students{
    constructor(studentName,ID){
        this.studentName = studentName;
        this.ID = ID
        
    }

     display = () =>{
        console.log(this.studentName , this.ID)
     }
}
let st1 = new students("Abubakar", 34)
st1.display()