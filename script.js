const lightBlue = document.querySelector(".light-blue-bg");
const whiteBg = document.querySelector('.white-bg')
const bigDiv = document.querySelector ('.img-text-div2');

const acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {

bigDiv.classList.remove("light-blue-bg");

bigDiv.classList.add('white-bg');
console.log('good');

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}





const panel = document.querySelector(".panel");
// const lightBlue = document.querySelector ('.light-blue-bg');

// acc.addEventListener ('click', function(){

// console.log('good')

// })
