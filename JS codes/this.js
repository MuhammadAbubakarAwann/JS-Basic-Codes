let math = 50;
let Eng = 45;
let Urdu = 55;
let student={
    math : 90,
    End : 95,
    Urdu : 87,

    totalMarks : function(){
        let total =this.math+this.Urdu+this.Eng
        return total;
    }

}
console.log(student.totalMarks());