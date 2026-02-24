
AOS.init({
    easing: 'ease-in-out-sine'
});
w3.includeHTML();

var intFrameHeight = window.innerHeight; // or
var intFrameWidth = window.innerWidth; // or

const dog = document.getElementById('dog');

window.addEventListener('resize', reportWindowSize);
function reportWindowSize() {
    intFrameHeight = window.innerHeight;
    intFrameWidth = window.innerWidth;
  /*  console.log(intFrameHeight);
    console.log(intFrameWidth);*/
  }
window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    let scrollX = this.scrollX;
    // if(scrollY/intFrameHeight>=.5 && !document.getElementById('dog').classList.contains('shown')){
    //         console.log("hello");
    //         /*document.getElementById('dog').classList.add('shown')*/
    // }
    /*console.log(scrollY);
    console.log(scrollX);*/
});