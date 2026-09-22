
let username = "ram";

{
    // console.log(username);
    let city = "harayna";
    // console.log(city); //*block scope  only acess inside the block 
    var id = "hello"; // you can only var in the out side the block 
}
// console.log(id);

for (let i = 0; i <= 5; i++) {

    // console.log(i);  //* block scope
}


function city() {
    let state = "harayna";
    console.log(state); //* block scope
    var productname = "Samsung S26 Ultra"
}
// console.log(productname); //* showing yerroe cannot acess the outside the function 


let count = 2; // this is global instilization 
function counter() {
    let count=0; // reset ho bar bar 
    count = count + 2;
    console.log(count);
}
counter(); // both are independent
counter();


