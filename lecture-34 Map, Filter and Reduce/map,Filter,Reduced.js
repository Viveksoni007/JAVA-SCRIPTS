let originalPrices =[463,654,2389];
let discountPrice=[]

for(value of originalPrices){
    let discount=value*10/100;
    discountPrice.push(value-discount) //* 10%Discount
    // discountPrice.push(value*0.9) //* 10%Discount
}

// console.log(originalPrices);
// console.log(discountPrice);

//? same code single line 
const discountedprice2=originalPrices.map((value)=>{
    return value*0.9;
})
const discountedprice3=originalPrices.map((value)=>value*0.9)


// console.log(discountedprice3);


let students=[
    {
        name:"ravi",
        rollono:10,
    },
    {
        name:"Shyam",
        rollono:12,
    },
    {
        name:"RAju",
        rollono:13,
    },
    {
        name:"Shreelela",
        rollono:23,
    },
]

let studentsName=[];
students.forEach((value)=>{
    studentsName.push(value.name);
});

// console.log(studentsName);

const studentsNames=students.map((students) =>students.name)
const studentsrollno=students.map((students) =>students.rollono)

// console.log(studentsNames,studentsrollno);
// console.log(studentsrollno);

let increserollno=students.map((students)=>{
    return {...students,rollono: students.rollono+10}  // spread 
})
// console.log(increserollno);


//! filter strated here

let students2=[
    {
        name:"ravi",
        marks:45,
    },
    {
        name:"Shyam",
        marks:85,
    },
    {
        name:"RAju",
        marks:32,
    },
    {
        name:"Shreelela",
        marks:56,
    },
    {
        name:"Sailesh",
        marks:26,
    },
]

let failedStudents=[];
students2.forEach((students2)=>{
    if(students2.marks<33){
        failedStudents.push(students2);
    }  
})
// console.log(failedStudents);

// const failedstudents=students2.filter((students)=> students.marks<33)
//* chaining karna 
const failedstudents=students2.filter((students)=> students.marks<33).map((student)=>student.name);
// console.log(failedstudents);


//!  reduced start here 

//*arry ke lentgh ko reduce karna 

let marks=[89,56,44,88,79,78];

let totalmarks=0;
marks.forEach((mark)=> totalmarks +=mark);
console.log("Total marks :",totalmarks);

const totalmark=marks.reduce((accumulator,currenvalue)=>{
    accumulator=accumulator+currenvalue;
    return accumulator;

},0)
// console.log(totalmark);

const attendance =["present","absent","present","absent","present", "present","absent","absent"];
// -->  {presenr = 4, absent =4}

let obj={};

attendance.forEach((value)=>{

    if(obj[value]){
        obj[value]=obj[value]+1;
    }
    else{
        obj[value]=1
    }
})
console.log(obj);

const obj1=attendance.reduce((acc,value)=>{
    acc[value]=(acc[value] || 0)+1;
    return acc;
},{})

console.log(obj1);