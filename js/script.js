let one=document.querySelector('.one');
let two=document.querySelector('.two');
let tree=document.querySelector('.three');
let four=document.querySelector('.four');


let StepOne=function(){
  one.style.display='flex';
  two.style.display='none';
  tree.style.display='none';
  four.style.display='none';
}
let StepTwo=function(){
  one.style.display='none';
  two.style.display='flex';
  tree.style.display='none';
  four.style.display='none';
}
let StepThree=function(){
  one.style.display='none';
  two.style.display='none';
  tree.style.display='flex';
  four.style.display='none';
}
let StepFour=function(){
  one.style.display='none';
  two.style.display='none';
  tree.style.display='none';
  four.style.display='flex';
}

let showinfo=function(e){
  let num=0;
  let elem= document.querySelector(`.${e}`);
  elem.classList.toggle('displaynone');

}






const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
  });




  
