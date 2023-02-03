"use strict";

const lightBlueBg = document.getElementsByClassName("lightBlueBg");

const whiteBg = document.getElementsByClassName("white-bg");

const bigDiv = document.getElementsByClassName("img-text-div2");

const mainDiv = document.querySelectorAll(".mainDiv");

const accordion = document.querySelector(".accordion");

// const panel = document.querySelector ('.panel')

// const notficationNumber = document.querySelector ('.number')

const dot = document.querySelectorAll('i');

const hide = document.querySelector('.hide');

// const pp =document.querySelector('.pp');

const markAllAsRead =document.querySelector ('.top-nav2');

const oP = document.querySelectorAll('.oP');






markAllAsRead.addEventListener('click', function(){

mainDiv.forEach((ctn) =>{
if (ctn.classList.contains("lightBlueBg")) {
 ctn.classList.remove("lightBlueBg");
}}
)


dot.forEach((dot) => {
  const closest = dot.closest(".mainDiv");
  if (closest)
 {
      dot.style.visibility = "hidden";
    };
});

 document.querySelector(".number").textContent = 0;

})




// Notification number

let number=[];

mainDiv.forEach((curr)=>{
  if (curr.classList.contains("lightBlueBg")){
number.push(curr);

  }

})
 let total = number.length;
 document.querySelector(".number").textContent = total;




  //  remove of bacground

mainDiv.forEach((ctn) =>
ctn.addEventListener('click', function(){

if (ctn.classList.contains("lightBlueBg")) {
 ctn.classList.remove("lightBlueBg");

  number = Number(document.querySelector(".number").textContent);
  number--;

  document.querySelector(".number").textContent = number;

 if (number < 0) {
   document.querySelector(".number").textContent = 0;
 }

}


})
)



// drop down button

oP.forEach((oP) => {
  const close = oP.closest(".mainDiv");
  if (close)
    close.addEventListener("click", function () {
      oP.classList.remove("hide");
    });
});




// remove individual icons by clicking on it

dot.forEach((dot) => {
  const closest = dot.closest(".mainDiv");
  if (closest)
    closest.addEventListener("click", function () {
      dot.style.visibility = "hidden";
    });
});


