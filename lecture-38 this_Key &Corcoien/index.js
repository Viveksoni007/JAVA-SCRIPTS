"use strict";

// let name1="shiva";
// console.log(name1);

// let students={
//     name:"vikash",
//     printName:function(){
//         console.log("hii",this.name);
//     }
// }

// students.printName();

// console.log(this);

// let students2={
//     name:"shivam",
//     printName:students.printName

// }
// students2.printName();

// let product={
//     name:"iphone",
//     printname:function(){
//         const print=()=>{
//             console.log(this.name);

//         }
//         print();
//     }
// }
// product.printname();

let nesteadfunction={

    name:"somethings",
    fun:function(){
        let product={
            name:"iohone",
            printName:function(){
                const print=()=>{
                    console.log(this.name);
                }
                print();
            }
        }
        product.printName();
    }
}
nesteadfunction.fun();

let nesteadfunction2={

    name:"somethings",
    fun:function(){
        let product={
            name:"iohone",
            printName:()=>{
                    console.log(this.name);
            }
        }
        product.printName();
    }
}
nesteadfunction2.fun();

// console.log(global===globalThis);

// var a=10;
// console.log(this.a);
// function fun1(){
//     console.log("function executed",this);
// }
// fun1();



let btn=document.getElementById("btn");

btn.addEventListener("mousemove", (event)=>{
    console.log("hii",Math.random( ));
});


