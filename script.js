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


let tracker1 = 10;
let tracker2=5
let tracker3=10

// count.textContent = tracker;


let x = 0;


function timer() {
    if (x < 11) {
       subRed.style.backgroundColor = 'red';
       subYellow.style.backgroundColor = 'black';
       subGreen.style.backgroundColor = 'black';
       count.textContent = tracker1;
       count.style.color="red"
       tracker1--
    } 
    else if (x >= 11 && x < 16) {
        
       subYellow.style.backgroundColor = 'yellow';
       subRed.style.backgroundColor = 'black';
       subGreen.style.backgroundColor = 'black';
       count.textContent = tracker2;
       count.style.color="yellow"
       tracker2--
    } 
    else if (x >= 16 && x <27) {
  
       subGreen.style.backgroundColor = 'green';
       subRed.style.backgroundColor = 'black';
       subYellow.style.backgroundColor = 'black';
       count.textContent = tracker3;
       count.style.color="green"
       tracker3--
    }
    x++;
    if(x>=27){
        tracker1=10
        tracker2=5
        tracker3=10
    }
    if (x >= 27) {
        x = 0;
    }
    
}

setInterval(timer, 1000);

