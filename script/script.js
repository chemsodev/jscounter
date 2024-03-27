const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const countlabel = document.getElementById("count");
let count=0;
reset.onclick= function () {
    count=0;
    countlabel.textContent=count;
}
increase.onclick= function () {
    count++;
    countlabel.textContent=count;

}
decrease.onclick= function () {
    count--;
    countlabel.textContent=count;

}