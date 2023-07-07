var nineTime = $("#9am-time-display");
var tenTime = $("#10am-time-display");
var elevenTime = $("#11am-time-display");
var twelveTime = $("#12pm-time-display");
var oneTime = $("#1pm-time-display");
var twoTime = $("#2pm-time-display");
var threeTime = $("#3pm-time-display");
var fourTime = $("#4pm-time-display");
var fiveTime = $("#5pm-time-display");
var currentTime = $("#date-time");
var btn = $("#button-1");
var input = $("#user-input-1");
var save = $("#button-1");
var rowOne = $('#row-1')

function displayTime() {
    var rightNow = dayjs().format("dddd, MMM, d [at] hh:mm:ss a");
    currentTime.text(rightNow);
}

displayTime();
setInterval(displayTime, 1000);

function isItTime() {
    var time = dayjs().format("ha");
    if (time === "9am") {
        document.querySelector("#row-1").style.backgroundColor = "red";
        console.log("its 9");
    } else if
        (time < "9am"){
        document.querySelector("#row-1").style.backgroundColor = "grey";
        console.log("its past 9")
    } else {
         (time > "9am")
          document.querySelector("#row-1").style.backgroundColor = "green";
        console.log("not 9 yet");
    }
}

function isItTime2() {
    var time = dayjs().format("ha");
    if (time === "10am") {
        document.querySelector("#row-2").style.backgroundColor = "red";
        console.log("its 10");
    } else if (time > "10am") {
        document.querySelector("#row-2").style.backgroundColor = "grey";
        console.log("its past 10");
    } else {
        (time < "10am");
        document.querySelector("#row-2").style.backgroundColor = "green";
        console.log("not 10 yet");
    }
}

function isItTime3() {
    var time = dayjs().format("ha");
    if (time === "11am") {
        document.querySelector("#row-3").style.backgroundColor = "red";
        console.log("its 11");
    } else if (time > "11am") {
        document.querySelector("#row-3").style.backgroundColor = "grey";
        console.log("its past 11");
    } else {
        (time < "11am");
        document.querySelector("#row-3").style.backgroundColor = "green";
        console.log("not 11 yet");
    }
}

function isItTime4() {
    var time = dayjs().format("ha");
    if (time === "12pm") {
        document.querySelector("#row-4").style.backgroundColor = "red";
        console.log("its 12");
    } else if (time > "12pm") {
        document.querySelector("#row-4").style.backgroundColor = "grey";
        console.log("its past 12");
    } else {
        (time < "12pm");
        document.querySelector("#row-4").style.backgroundColor = "green";
        console.log("not 12 yet");
    }
}

function isItTime5() {
    var time = dayjs().format("ha");
    if (time === "1pm") {
        document.querySelector("#row-5").style.backgroundColor = "red";
        console.log("its 1");
    } else if (time > "1pm") {
        document.querySelector("#row-5").style.backgroundColor = "grey";
        console.log("its past 1");
    } else {
        (time < "1pm");
        document.querySelector("#row-5").style.backgroundColor = "green";
        console.log("not 1 yet");
    }
}

function isItTime6() {
    var time = dayjs().format("ha");
    if (time === "2pm") {
        document.querySelector("#row-6").style.backgroundColor = "red";
        console.log("its 2");
    } else if (time > "2pm") {
        document.querySelector("#row-6").style.backgroundColor = "grey";
        console.log("its past 2");
    } else {
        (time < "2pm");
        document.querySelector("#row-6").style.backgroundColor = "green";
        console.log("not 2 yet");
    }
}

function isItTime7() {
    var time = dayjs().format("ha");
    if (time === "3pm") {
        document.querySelector("#row-7").style.backgroundColor = "red";
        console.log("its 3");
    } else if (time > "3pm") {
        document.querySelector("#row-7").style.backgroundColor = "grey";
        console.log("its past 3");
    } else {
        time < "3pm";
        document.querySelector("#row-7").style.backgroundColor = "green";
        console.log("not 3 yet");
    }
}

function isItTime8() {
    var time = dayjs().format("ha");
    if (time === "4pm") {
        document.querySelector("#row-8").style.backgroundColor = "red";
        console.log("its 4");
    } else if (time > "4pm") {
        document.querySelector("#row-8").style.backgroundColor = "grey";
        console.log("its past 48");
    } else {
        time < "4pm";
        document.querySelector("#row-8").style.backgroundColor = "green";
        console.log("not 4 yet");
    }
}

function isItTime9() {
    var time = dayjs().format("ha");
    if (time === "5pm") {
        document.querySelector("#row-9").style.backgroundColor = "red";
        console.log("its 5");
    } else if (time > "5pm") {
        document.querySelector("#row-9").style.backgroundColor = "grey";
        console.log("its past 5");
    } else {
        time < "5pm";
        document.querySelector("#row-9").style.backgroundColor = "green";
        console.log("not 5 yet");
    }
}

isItTime();
isItTime2();
isItTime3();
isItTime4();
isItTime5();
isItTime6();
isItTime7();
isItTime8();
isItTime9();

function save() {
    var item = input.val();
    localStorage.setItem("storedItem", item);
    input.val(item);
    console.log(item);
}

function get() {
    var storedItem = localStorage.getItem("storedItem");
    console.log("stored Item:", storedItem);
    if (storedItem) {
        console.log("stored Item exists");
          storedItem = input.textContent;
        
    } else {
        console.log("stored item not found");
    }
}

const button = document.querySelector("#button-1");
button.addEventListener("click", function (e) {
    console.log(e);
});

get();
