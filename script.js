let buttons=document.querySelectorAll(".color");
let body=document.querySelector("body");
let head=document.querySelector("h2")
const hii=(co)=>{
    body.style.backgroundColor=co;
    head.textContent=co.toUpperCase();
;}
    
buttons.forEach((color)=>{
    color.addEventListener("click",()=>{
         let co=color.getAttribute("id");
hii(co)})
});

//random color generator
let random=document.querySelector(".color1");
const ran=()=>{
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let red=Math.floor(Math.random()*255);
 let color=`rgb(${red},${green},${blue})`;
hii(color)
}
random.addEventListener("click",ran)