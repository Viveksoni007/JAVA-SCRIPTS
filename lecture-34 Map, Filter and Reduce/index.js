let students ={
    name :"vivek",
    rollno:45,
    subjects:["math","english","science"]
}
// let{subjects,name ,rollno}=students
// console.log(subjects);

//* how to rename your key 
// subjects-> vishay 
let{ subjects:vishay,...variable}=students
// console.log(vishay);


let obj1={

    name:"shayam",
    phone:855652586
}

let obj2={

    adddrss:"india",
    addharcard:7845129635624,
    name:"ravi"
}

let obj3={...obj1,...obj2};
// console.log(obj3);

//? array and objects --> update

const arr=[1,2,3,4];
arr[1]="updated";
// arr=["Dlsk","rare"];
// console.log(arr);

const obj={// LET USE KARKE OBJ 
    name:"KRISHNA",
    ROLLNO:23,
    address:null,
}

// obj={
//     ADD:"RAJU"
// }

obj["name"]="raju";
obj.name="shayam";

// delete obj.ROLLNO;

// console.log(obj);
// console.log(obj.address?.street);//* yo check if alivlibe or not ;

let arr1=[1,2,3,4,5,6];
// arr1.pop();
// arr1.shift(2);
arr1[3]=undefined;
// console.log(arr1);


//?  splice startrt hare 
let arr2=[1,2,3,4,5,6,7];

// arr2.splice(1,3) //* delete
// arr2.splice(3,0,"hello")//*add
// arr2.splice(3,1,["replances"])//* replace

//? slices started 
// let arrtrim=arr2.slice(1,3)
// console.log(arrtrim);

// console.log(arr2.indexOf(6));

let res=arr2.find((value) =>{

    return value===5;
})

// console.log(res);

let resIndex=arr2.findIndex((value)=>{
    return value===1;
})
// console.log(resIndex);


//*flat
let arr3=[1,2,3,4,5,[6,7,8] ,[9,10,11,12]];
// console.log(arr3.flat(Infinity));


//* mutuabality
let array=[10,20,30,40,50,60,70,80,90];
let arryCopy=array;
let arryCopy2=[...array];   // spred oprators 
arryCopy2.pop();

console.log("orginal",array);
console.log("Copy",arryCopy2);