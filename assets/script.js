var nineTime = $('#9am-time-display');
var tenTime = $('#10am-time-display');
var elevenTime = $('#11am-time-display');
var twelveTime = $('#12pm-time-display');
var oneTime = $('#1pm-time-display');
var twoTime = $('#2pm-time-display');
var threeTime =$('#3pm-time-display');
var fourTime =$('#4pm-time-display');
var fiveTime =$('#5pm-time-display');
var currentTime=$('#date-time');
var btn=$('#btn1');
function displayTime() {
    var rightNow= dayjs().format('dddd, MMM, d [at] hh:mm:ss a');
    currentTime.text(rightNow);
}
displayTime();
setInterval(displayTime, 1000);


var storedItem = localStorage.getItem("storedItem");

function save(){

    var Item= document.getElementById("user-input-1").value;
    localStorage.setItem("storedItem", item);
    document.getElementById("savedText").innerHTML = item + "SAVED";
}
function get(){
    localStorage.getItem("storedItem");
    document.getElementById("openedText").innerHTML = storedItem+ "opened"
}
function ListOne(){
    var input= localStorage.getItem('Section1', length);

}
const button = document.querySelector("#button-1")
button.addEventListener("click", e =>{
    console.log(e)
})