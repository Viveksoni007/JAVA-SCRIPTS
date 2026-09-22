//! function starts    

// let shayanmarks =44+56+34;
// let shayadmarks =26+14+84;
// let radhasmarks =54+74+44;
// let ranimarks =41+52+74;

// console.log(shayadmarks+shayadmarks);



// let productprice=3000;
// let discountedAMOUNT=3000*10/100;
// let DiliveryCharge=50;
// let TotalAmount=productprice-discountedAMOUNT+DiliveryCharge;

// console.log(TotalAmount);



function greet(){

    console.log("hi bro!");
}
greet();


// function totalmarks( studentName ,mathmarks,sciencemarks,hindimarks){
//     console.log( ` ${studentName} total marks :`, mathmarks+sciencemarks+hindimarks);
// }
// totalmarks("aman ",45,85,96);
// totalmarks("ravi ",85,45,46);
// totalmarks("akju ",85,45,76);
// totalmarks("arun ",45,95,48);


//? arugemenrts paramenters

// function greeting(username ,greet){
//     console.log(`${greet} ${username}`);
// }
// greeting("ravi " ,"hii")
// greeting("Shyam " ,"hello")
// greeting("Anshika " ,"Nameste")
// greeting("suraj " ,"good morning")


//!  default parameters

function greeting(username="Guest" ,greet= "hii"){
    console.log(`${greet} ${username}`);
}
greeting();



// function calculator(num1,num2 ,opearator){

//     switch(opearator){
//         case "+":
//             console.log(`${num1} ${opearator} ${num2} `,num1+num2);
//             break;
//         case "-":
//             console.log(`${num1} ${opearator} ${num2} `,num1-num2);
//             break;
//         case "*":
//             console.log(`${num1} ${opearator} ${num2} `,num1*num2);
//             break;
//         case "/":
//             console.log(`${num1} ${opearator} ${num2} `,num1/num2);
//             break;
//     }
// }

// calculator(4,5,"+");
// calculator(4,5,"-");
// calculator(4,5,"*");
// calculator(4,5,"/");

//? calculate perchangtage

// function calPerchantage( studentName ,mathmarks,sciencemarks,hindimarks){
//     let totalmarks= mathmarks+sciencemarks+hindimarks;
//     let perchanatge=(totalmarks/300)*100
//     console.log("perchanatge",perchanatge)
// }
// calPerchantage("aman ",45,85,96);
// calPerchantage("akju ",85,45,76);
// calPerchantage("ravi ",85,45,46);
// calPerchantage("arun ",45,95,48);

// let response=calPerchantage("aman ",45,85,96)
// console.log(response);


fun1()
function fun1(){
    console.log("functions declarations ");
}


// console.log(add(5,7));
// let add=function (num1,num2){
//     return num1 +num2
// }


// ! arrow functions 
//* syamtax 1
let adds =num1 =>num1+4;
console.log(adds(7+8));

//* syamtax 2


let add1=(num1,num2)=>num1+num2;
console.log(add1(7+8));


//* syamtax 2 
let add=(num1, num2)=>{
    return num1+num2
}
console.log(add(5,7));
