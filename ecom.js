// JavaScript code to handle menu item interactions and dynamic product changes

const wrap = document.querySelector(".wrapper");
const menuitem = document.querySelectorAll(".menuitem");
const products = [
    {
        id: 1,
        tittle: "Air Force",
        price: 119,
        colors: [
            {
                code: "orange",
                img: "./nikeairforce.png",
            },
            {
                code: "blue",
                img: "./nikeairforce2.png",
            },
        ],
    },
    {
        id: 2,
        tittle: "Jordan",
        price: 129,
        colors: [
            {
                code: "white",
                img: "./whitejordan.png",
            },
            {
                code: "grey",
                img: "./grayjordan.png",
            },
        ],
    },
    {
        id: 3,
        tittle: "Blazzer",
        price: 109,
        colors: [
            {
                code: "white",
                img: "./blaze2 (1).png",
            },
            {
                code: "black",
                img: "./blaze.png",
            },
        ],
    },
    {
        id: 4,
        tittle: "Nike",
        price: 130,
        colors: [
            {

                code: "red",
                img: "./niketop.png",
            },
            {
                code: "orangered",
                img: "./Nikeorange.png",
            },
        ],
    },
    {
        id: 5,
        tittle: "Addidas",
        price: 120,
        colors: [
            {
                code: "black",
                img: "./high1.png",
            },
            {
                code: "gray",
                img: "./high.webp",
            },
        ],
    },

];

let choosenproduct = products[0];
let currentproductimg = document.querySelector(".productimg");
let currentproducttittle = document.querySelector(".producttitle");
let currentproductprice = document.querySelector(".productprice");
let currentproductcolor = document.querySelectorAll(".colors");
let currentproductsizes = document.querySelectorAll(".sizes .size");



menuitem.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Change the current slide
        wrap.style.transform = `translateX(${-98 * index}vw)`;

        // Change the chosen product
        choosenproduct = products[index]

        // Update text and image of the current product
        currentproducttittle.textContent = choosenproduct.tittle;
        currentproductprice.textContent = "$" + choosenproduct.price;
        currentproductimg.src = choosenproduct.colors[0].img;

        // Assign color styles dynamically
        currentproductcolor.forEach((color, colorIndex) => {
            if (choosenproduct.colors[colorIndex]) {
                color.style.backgroundColor = choosenproduct.colors[colorIndex].code;
                color.style.display = "block"; // Ensure only available colors are shown
            } else {
                color.style.display = "none"; // Hide if no matching color exists
            }
        });
    });
});

currentproductcolor.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentproductimg.src=choosenproduct.colors[index].img
    })
})

const menu = document.querySelectorAll('.menuitem');
menu.forEach(item => {
    item.addEventListener('click', () => {
        menu.forEach(menuItem => menuItem.style.fontWeight = 'normal');
        item.style.fontWeight = 'bold';
    });
});
currentproductsizes.forEach((size) => {
    size.addEventListener("click", () => {
        // Reset background color and text color for all size boxes
        currentproductsizes.forEach((s) => {
            s.style.backgroundColor = '';  // Reset background color
            s.style.color = '';            // Reset text color
        });

        // Apply styles to the clicked size box only
        size.style.backgroundColor = 'black';
        size.style.color = 'white';
    });
});
const productbutton=document.querySelector(".paybutton");
const close=document.querySelector(".close");
const payment=document.querySelector(".payment");
productbutton.addEventListener("click",()=>{
    payment.style.display="flex";
})
close.addEventListener("click",()=>{
    payment.style.display="none";
})
const but=document.querySelector(".help");
function openmail(){
    const email="nike.store.help1008@gmail.com"
    const subject="Help Request..."
    const body="hello, I need assistance with my order"
    const mailtoLink=`mailto:${(email)}?subject=${(subject)}&body=${(body)}`;
    window.location.href=mailtoLink
}   
but.addEventListener('click',openmail);

