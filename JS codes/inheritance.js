class Parent{

    constructor(FatherName, MotherName, FatherEyesColor){
        this.FatherName = FatherName
        this.MotherName = MotherName
        this.FatherEyesColor = FatherEyesColor
    }
    display(){
        console.log("Father Name :"+this.FatherName+"Mother Name"+this.MotherName+"Father Eye Color : "+this.FatherEyesColor+"Child Name : "+this.childName)

    }
}
class child_1 extends Parent{
    constructor(FatherName, MotherName ,FatherEyesColor, childName){
        super(FatherName, MotherName, FatherEyesColor)
        this.childName = childName
    }
    student_data(){
        this.display()
    }
}

let ch1 = new child_1("Maqsood", "XYZ", "Brown","abubakar")
ch1.student_data()