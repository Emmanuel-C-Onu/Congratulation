let mobileMenu = document.querySelector('.mobileButton')
let mobile = document.querySelector('.mobile')


mobileMenu.addEventListener('click', ()=>{
    mobile.classList.toggle('hidden')
})

var typed = new Typed("#typed-text", {
  strings: [
    "My Sweet Stella Owa Ogiemwonyi, ",
    "Congratulations on your graduation. Education is the key to unlocking your potential. I pray that God who is your helper and your shield will Continue to help and shield you from all evil Amen!.", "I ❤ You!",
  ],
  typeSpeed: 45,
  backDelay: 1000,
  backSpeed: 5,
  loop: true,
  loopCount: 5,
});

window.addEventListener('scroll', ()=>{
  if(scrollY>100){
    document.querySelector('header').classList.add('fixed')
  }else{
    document.querySelector("header").classList.remove("fixed");
  }
})


