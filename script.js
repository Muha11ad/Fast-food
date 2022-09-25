const orderBtn = document.querySelector(".btn")
const list = document.querySelector(".list") 

let order = function makeProduct () {
    setTimeout(() => {
        list.innerHTML = `<h3>Order accepted</h3>`
    setTimeout(() => {
        list.innerHTML = `<h3 style="text-align: center;">Products has been prepared<h3>`
    setTimeout(() => {
        list.innerHTML = `<h3>Relax with procces<h3>`
    setTimeout(() => {
         list.innerHTML = `<li class ="d-flex  justify-content-center flex-column align-items-center">
         <p style= "text-align:center; font-size:25px;" >We need bread burger</p>
         <img style="width:200px; height:184px;" src= "./images/1.PNG">
         </li>`
    setTimeout(() => {
        list.innerHTML = `<li class ="d-flex  justify-content-center flex-column align-items-center">
        <p style= "text-align:center; font-size:25px;" >Prepend lettuce there</p>
        <img style="width:200px; height:184px;" src= "./images/2.PNG">
        </li>`
    setTimeout(() => {
        list.innerHTML = `<li class ="d-flex  justify-content-center flex-column align-items-center">
        <p style= "text-align:center; font-size:25px;" >put tomatoes 🍅</p>
        <img style="width:200px; height:184px;" src= "./images/3.PNG">
        </li>`
    setTimeout(() => {
        list.innerHTML = `<li class ="d-flex  justify-content-center flex-column align-items-center">
        <p style= "text-align:center; font-size:25px;" >Add meat to make it delicious </p>
        <img style="width:200px; height:184px;" src= "./images/4.PNG">
        </li>`
    setTimeout(() => {
        list.innerHTML = `<li class ="d-flex  justify-content-center flex-column align-items-center">
        <p style= "text-align:center; font-size:25px;" >netherlands cheese 🧀 </p>
        <img style="width:200px; height:184px;" src= "./images/5.PNG">
        </li>`
    setTimeout(() => {
        list.innerHTML = `<li class ="d-flex  justify-content-center flex-column align-items-center">
        <p style= "text-align:center; font-size:25px;" >Another lettuce to make it fresh  </p>
        <img style="width:200px; height:184px;" src= "./images/6.PNG">
        </li>`
    setTimeout(() => {
        list.innerHTML = `<li class ="d-flex  justify-content-center flex-column align-items-center">
        <p style= "text-align:center; font-size:25px;">buon appetito</p>
        <img style="width:200px; height:184px;" src= "./images/7.PNG">
        </li>`
        alert(" Wait please ⏳")},4000);  
},3000); 
    },3000);    
    },3000);      
    },3000);    
    },3000);     
    },3000);    
    },2000);    
    },2000);
    },1500)
}

