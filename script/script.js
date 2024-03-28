const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const countlabel = document.getElementById("count");
let count=0;
reset.onmousedown= function () {
    count=0;
    countlabel.textContent=count;
    reset.style.width="9.3vw";
    reset.style.height="4.3vw";
    
}
reset.onmouseup= function () {
    reset.style.width="9vw";
    reset.style.height="4vw";
}
increase.onmousedown= function () {
    increase.style.width="9.3vw";
    increase.style.height="4.3vw";
        count++;
        countlabel.textContent=count; 
}
increase.onmouseup= function () {
    increase.style.width="9vw";
    increase.style.height="4vw";
}
decrease.onmousedown= function () {
    count--;
    countlabel.textContent=count;
    decrease.style.width="9.3vw";
    decrease.style.height="4.3vw";

}
decrease.onmouseup= function () {
    decrease.style.width="9vw";
    decrease.style.height="4vw";
}