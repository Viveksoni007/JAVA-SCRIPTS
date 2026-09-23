//? dom is  document Object Model


// console.log("hii");
// console.log(document);

// let h1=document.getElementById("h1")
// let h1=document.querySelector("h1")
// let h1=document.querySelector(".h1")//*null
// let h1=document.querySelector("#h1")


// let h1=document.querySelectorAll("#h1")
// console.log(h1);

// let p=document.querySelector("#dt")

//updating the para graph tag 
// p.textContent="hello freinds"
// p.innerHTML="<h1>Good morning</h2>"
// console.log(p.textContent);
// console.log(p.innerHTML);
// console.log(p.innerText);

// p.setAttribute("style","background-color:orange; font-size:50px")

// let btn=document.querySelector("#btn")
// btn.setAttribute("disabled","true")
// btn.textContent="remove"

// let res=p.getAttribute("style");
// let res=p.getAttribute("id");
// console.log(res);

// p.removeAttribute("style") //* for removing sylle 
// btn.removeAttribute("disabled")
// p.classList.add("random")
// p.classList.remove("random")
// p.classList.toggle("random")

// console.log(p.classList.contains("random"));

// p.style.backgroundColor="yellow";
// p.dataset.helloDostoHii="hi";

// console.log(p.dataset.helloDostoHii);


let products=[

    {
        name:"iphone duo",
        price:300000,
        imgUrl : "https://m.media-amazon.com/images/I/610EW2Olg1L._AC_UY218_.jpg"

    },
    {
        name:"SamungS26 Ultra",
        price:175000,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name:"find x9",
        price:145000,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name:"vivo x300pro",
        price:163000,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name:"Mi 17 pro max",
        price:112000,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name:"poco f 8pro",
        price:11200,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name:"lava agani20pro",
        price:850000,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name:"SAMSUNG Z7 FOLD",
        price:165000,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    
]


let div =document.createElement("div");


// div.textContent="helllo"
// console.log(div);
// div.textContent="hello-Ravi";
let body=document.querySelector("body")
// body.appendChild(div)//*  appnechils ke under single node se sakte hai
body.append(div) // insert  last in body 
// body.prepend(div) // insert in start body  


let  productlist= document.querySelector("#product-list")

products.forEach((products) =>{
    // console.log(products);
    // const card =document.createElement("p")
    // card.textContent=`${products.name} - ${products.price}`
    // productlist.append(card).

    const card = document.createElement("div");
    card.classList.add("singleProduct");

        // const upperDiv = document.createElement("div")
    // const lowerDiv = document.createElement("div")

    // const img = document.createElement("img")

    // img.setAttribute("src" , "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg")

    // upperDiv.append(img)

    // card.append(upperDiv)

    // productList.append(card)

    card.innerHTML = `<div>
    <img src=${products.imgUrl} alt="">
    </div>
    <div class="productDetail">
        <p>${products.name}</p>
        <p>${products.price}</p>
    </div>`


    productlist.append(card)


})

let h2 = document.querySelector("#h45")

// body.removeChild(h2) // you have to perform on parent


h2.remove() // directly on the element you want to remove


let clone=productlist.cloneNode(true);
console.log(clone);
body.append(clone);

const items = productlist.children


// productlist.insertBefore(h2 , items[2]) // for precise positioning

// items[2].before(h2);
items[2].after(h2);