let main = document.createElement("div");
main.setAttribute("class","main");

let subRed = document.createElement("div");
subRed.setAttribute("class","sub");

let subYellow = document.createElement("div");
subYellow.setAttribute("class","sub");

let subGreen = document.createElement("div");
subGreen.setAttribute("class","sub");

let time = document.createElement('div');
time.setAttribute("class","time");
let count = document.createElement("h2");
count.setAttribute("class","count")

document.body.appendChild(main);
main.append(time,subRed,subYellow,subGreen);
time.appendChild(count);


let timer1 = 10;
let timer2=5
let value = 0;

function signal() 
{
    if (value < 11) 
    {
       subRed.style.backgroundColor = 'red';
       subYellow.style.backgroundColor = 'black';
       subGreen.style.backgroundColor = 'black';
       count.textContent = timer1;
       count.style.color="red"
       timer1--
    } 
    else if (value >= 11 && value < 17) 
    {
       subYellow.style.backgroundColor = 'yellow';
       subRed.style.backgroundColor = 'black';
       subGreen.style.backgroundColor = 'black';
       count.textContent = timer2;
       count.style.color="yellow"
       timer2--
       timer1=10;
    } 
    else if (value >=17 && value <=27) 
    {
       subGreen.style.backgroundColor = 'green';
       subRed.style.backgroundColor = 'black';
       subYellow.style.backgroundColor = 'black';
       count.textContent = timer1;
       count.style.color="green"
       timer1--
    }
    value++;
    if(value > 27)
    {
      timer1=10
      timer2=5
      value = 0;
    }  
}
setInterval(signal, 1000);

