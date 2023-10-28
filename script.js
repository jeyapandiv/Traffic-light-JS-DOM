let main = document.createElement("div");
main.classList.add("main")

let subRed = document.createElement("div");
subRed.classList.add("sub")

let subYellow = document.createElement("div");
subYellow.setAttribute("class","sub");

let subGreen = document.createElement("div");
subGreen.setAttribute("class","sub");

let time = document.createElement('div');
time.classList.add("time");
let count = document.createElement("h2");
count.classList.add("count");

document.body.appendChild(main);
main.append(time,subRed,subYellow,subGreen);
time.appendChild(count);


let timer1 = 10;
let value = 0;

function signal() 
{
    if (value < 11) 
    {
       subRed.classList.add("bgr");
       subGreen.classList.remove("bgg");
       count.textContent = timer1;
       count.style.color="red"
       timer1--


    } 
    else if (value >= 11 && value < 17) 
    {
       subYellow.classList.add("bgy");
       subRed.classList.remove("bgr");
       count.textContent = timer1;
       count.style.color="yellow"
       timer1--

    } 
    else if (value >=17 && value <=27) 
    {
       subGreen.classList.add("bgg");
       subRed.classList.remove("bgr");
       subYellow.classList.remove("bgy");
       count.textContent = timer1;
       count.style.color="green"
       timer1--
    }
    value++;
    if (value == 11) {
      timer1=5;
    }
    else if (value == 17) {
      timer1=10;
    }
    else if(value > 27)
    {
      timer1=10;
      value = 0;
    }  
}
setInterval(signal, 1000);

