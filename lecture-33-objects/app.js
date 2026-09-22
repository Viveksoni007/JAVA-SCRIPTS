
let product1=["iphone18pro",1750000,4.7];

let product2={
    name :"iphoneDuo",
    price :299999,
    Rattiing:4.5,
    totalReview:75,
    Discount:10,
    ProductName:"Iphone 18 ",//this is execessing use This keyword
    variants:["base","pro","pro max"],
    manufatureDetails:{
        city:"gurgaon",
        state :"Harayna",
        country:"INDIA"
    },
    printproductname:function(){
        console.log(this.ProductName);
    },
    printproductname:function(){
        console.log("IPHONE 18 PRO MAX");
    },

    printDiscount:function(){
        console.log("15%");
    }
}

// console.log(product1[0]);
// console.log(product2);
// console.log(product2.name,product2.price);
// console.log(product2.name,product2.price);
// product2.printDiscount();
// product2.printproductname();



// console.log(Object.keys(product2));
// console.log(Object.values(product2));
// console.log(Object.entries(product2));

//* acces for loop for in for out

// for(value of product1){
//     console.log(value);
// }

// for(let i=0;i<product1.length;i++){
//     console.log(product1[i]);
// }

// product1.forEach (function(value, index){
//     console.log(value,index);
// })


// let Math4={
//     abs(){},
//     ceil(){},
//     floor(){}
// }

// Math4.abs;



// function b(fun){
//     console.log("b");
//     console.log(fun);
//     fun()
// }

// let a = function(){
//     console.log("a");
// }

// b(a)



// for(value in product2){
//     console.log(product2[value]);
// }


//? destructring


// let product0=["iphone18pro",1750000,4.7,10];

// const [name ,price,Rattting,discount]=["iphone18pro",1750000,4.7,10];

// console.log(name);
// console.log(price);


//? same wu=ith using or accessing objects project2


// for(value of Object.entries(product2)){
//     console.log(value);
// }


// for([key ,value] of Object.entries(product2)){
//     console.log( key,value);
// }


//* spread operatos mean unbox karna or unpack karna  usesung ... 3three dots 
let arr=[10,55,77,99,33,22,15,25,78,93,624,522,652,63,29];

// console.log(arr);
// console.log(...arr);
// console.log("The Minimum value of arrya is : ",Math.min(...arr));

//* array mersing by using spread oprators

let a=[1,2];
let b=[3,4];
let c=[...a,...b];//*merage karna 
// console.log(...c);

//? rest opratoer means pack karan array ke under work like oppsotise 


const [n ,p,...rest]=["iphone18pro",1750000,4.7,10,78];

// console.log(rest);

function add(...numbers){
    let total=0;

    for(value of numbers){
        total +=value;
    }
    return total;
    // console.log(numbers);
}
// console.log("The Sum Of All Numbers is : ",add(4,85,963,42,68,686,8));


// let {price, name ,...privateDetails}=product2
// console.log(price,name,privateDetails);

let {manufatureDetails ,...userdetails}=product2    // rest 
console.log(userdetails);