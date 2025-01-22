let accessButton = document.querySelector(".accessButton");
const colors = [
  "green",
  "aqua",
  "tomato",
  "purple",
  "chocolate",
  "orange",
  "cyan",
  "blue",
  "red",
  "gray",
];


window.addEventListener("DOMContentLoaded", doSomthing());

function doSomthing() {
  let startCount = 10;

  const intervalID = setInterval(() => {
    const endCount = 0;
    const countInterval = startCount - endCount;

    const count = startCount--;
    const randomColor = colors[count];

    document.body.style.backgroundColor = `${randomColor}`;




    //accessButton.innerHTML = count;
    
    if (countInterval == 0) {
      clearInterval(intervalID);
    }
  }, 3000);
}


  
    
    












function clickme() {
  let startCount = 20;

  const intervalID = setInterval(() => {
    const endCount = 0;
    const countInterval = startCount - endCount;

    const count = startCount--;
    accessButton.innerHTML = count;
    accessButton.classList.remove("animate-pulse");

    if (countInterval == 0) {
      clearInterval(intervalID);
      accessButton.innerHTML = "ok";
      accessButton.classList.add("animate-pulse");
      accessButton.classList.remove("bg-white");
      accessButton.classList.add("bg-[green]");
      accessButton.classList.add("text-white");
      setTimeout(() => {
        location.href = "main.html";
      }, 1200);
    }
  }, 1500);
}
