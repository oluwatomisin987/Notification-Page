"use strict";

const lightBlueBg = document.getElementsByClassName("lightBlueBg");

const whiteBg = document.getElementsByClassName("white-bg");

const bigDiv = document.getElementsByClassName("img-text-div2");

const mainDiv = document.querySelectorAll(".mainDiv");

const accordion = document.querySelector(".accordion");

const number = document.querySelector ('.number')








mainDiv.forEach((ctn) =>
ctn.addEventListener('click', function(){
  console.log('load');
  ctn.classList.remove('lightBlueBg')


  data = Number(document.querySelector(".number").textContent);
  data--;

  document.querySelector(".number").textContent = data;



})
)










// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {

// bigDiv.classList.remove("light-blue-bg");

// bigDiv.classList.add('white-bg');
//  console.log('good');

//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
