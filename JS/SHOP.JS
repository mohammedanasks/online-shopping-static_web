

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add('active   ')
    })
}

const sop_img = document.getElementsByClassName("pro");
const product_view_img = document.getElementsByClassName("pro-image");
console.log(product_view_img)

sop_img[0].onclick=function(){
    product_view_img.src= sop_img[0].src;
    window.location.href='PRODUCT_VIEW.HTML';
   
}


document