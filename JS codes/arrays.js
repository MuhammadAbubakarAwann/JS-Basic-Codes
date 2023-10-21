let arr = [Name = 'Abubakar', ID= 89,Gender = 'Male',Age = 20]
for(let i=0; i<=3; i++){
    console.log(arr[i]);
}
//------------------ 
let arr1 = new Array(1,2,3,4,5)
for(let i=0; i<4; i++){
    console.log(arr1[i])
}
//-----------------
arr1.push(9)
console.log('after push ', arr1);
arr1.pop(3)
console.log("After pop ", arr1);
arr1.splice(2,1,800)
console.log("After Splice : ", arr1)
//------------------
let arr2 = Array(1,2,3,4,5)
arr2.forEach(element=>{
    console.log(element)
})

//filtered Array
let filteredArray = arr2.filter((x)=>{
    if(x>2)
    return x;
})

filteredArray.forEach((ele)=>{
    console.log(ele);
})


// Finding Element in Array

let SearchElement = arr2.find((x)=>{
    if (x == 3)
    return x;
})
console.log(SearchElement)

 //concatination of arrays


 let UpperCaseArray = ['A','B','C','D']
 let LowerCaseAray = ['a','b','c','d']
 let concatedArray = UpperCaseArray.concat(LowerCaseAray);

concatedArray.forEach((x)=>{
    console.log(x)
})