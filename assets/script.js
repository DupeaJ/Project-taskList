var currentTime = $("#date-time");
var input = $("#user-input-1");
var input2 = $('#user-input-2');
var input3 = $('#user-input-3');
var input4 = $('#user-input-4');
var input5 = $("#user-input-5");
var input6 = $("#user-input-6");
var input7 = $("#user-input-7");
var input8 = $("#user-input-8");
var input9 = $("#user-input-9");

function displayTime() {
    var rightNow = dayjs().format("dddd, MMM, D [at] hh:mm:ss a");
    currentTime.text(rightNow);
}

displayTime();
setInterval(displayTime, 1000);

function isItTime() {
    var time = dayjs().format("ha");
    if (time === "9am") {
        document.querySelector(".row1").style.backgroundColor = "red";
        console.log("its 9");
    } else if
        (time < "9am"){
        document.querySelector(".row1").style.backgroundColor = "grey";
        console.log("its past 9")
    } else {
         (time > "9am")
          document.querySelector(".row1").style.backgroundColor = "green";
        console.log("not 9 yet");
    }
   
}

function isItTime2() {
    var time = dayjs().format("ha");
    if (time === "10am") {
        document.querySelector(".row2").style.backgroundColor = "red";
        console.log("its 10");
    } else if (time > "10am") {
        document.querySelector(".row2").style.backgroundColor = "grey";
        console.log("its past 10");
    } else {
        (time < "10am");
        document.querySelector(".row2").style.backgroundColor = "green";
        console.log("not 10 yet");
    }
}

function isItTime3() {
    var time = dayjs().format("ha");
    if (time === "11am") {
        document.querySelector(".row3").style.backgroundColor = "red";
        console.log("its 11");
    } else if (time > "11am") {
        document.querySelector(".row3").style.backgroundColor = "grey";
        console.log("its past 11");
    } else {
        (time < "11am");
        document.querySelector(".row3").style.backgroundColor = "green";
        console.log("not 11 yet");
    }
}

function isItTime4() {
    var time = dayjs().format("ha");
    if (time === "12pm") {
        document.querySelector(".row4").style.backgroundColor = "red";
        console.log("its 12");
    } else if (time > "12pm") {
        document.querySelector(".row4").style.backgroundColor = "grey";
        console.log("its past 12");
    } else {
        (time < "12pm");
        document.querySelector(".row4").style.backgroundColor = "green";
        console.log("not 12 yet");
    }
}

function isItTime5() {
    var time = dayjs().format("ha");
    if (time === "1pm") {
        document.querySelector(".row5").style.backgroundColor = "red";
        console.log("its 1");
    } else if (time > "1pm") {
        document.querySelector(".row5").style.backgroundColor = "grey";
        console.log("its past 1");
    } else {
        (time < "1pm");
        document.querySelector(".row5").style.backgroundColor = "green";
        console.log("not 1 yet");
    }
}

function isItTime6() {
    var time = dayjs().format("ha");
    if (time === "2pm") {
        document.querySelector(".row6").style.backgroundColor = "red";
        console.log("its 2");
    } else if (time > "2pm") {
        document.querySelector(".row6").style.backgroundColor = "grey";
        console.log("its past 2");
    } else {
        (time < "2pm");
        document.querySelector(".row6").style.backgroundColor = "green";
        console.log("not 2 yet");
    }
}

function isItTime7() {
    var time = dayjs().format("ha");
    if (time === "3pm") {
        document.querySelector(".row7").style.backgroundColor = "red";
        console.log("its 3");
    } else if (time > "3pm") {
        document.querySelector(".row7").style.backgroundColor = "grey";
        console.log("its past 3");
    } else {
        time < "3pm";
        document.querySelector(".row7").style.backgroundColor = "green";
        console.log("not 3 yet");
    }
}

function isItTime8() {
    var time = dayjs().format("ha");
    if (time === "4pm") {
        document.querySelector(".row8").style.backgroundColor = "red";
        console.log("its 4");
    } else if (time > "4pm") {
        document.querySelector(".row8").style.backgroundColor = "grey";
        console.log("its past 8");
    } else {
        time < "4pm";
        document.querySelector(".row8").style.backgroundColor = "green";
        console.log("not 4 yet");
    }
}

function isItTime9() {
    var time = dayjs().format("ha");
    if (time === "5pm") {
        document.querySelector(".row9").style.backgroundColor = "red";
        console.log("its 5");
    } else if (time > "5pm") {
        document.querySelector(".row9").style.backgroundColor = "grey";
        console.log("its past 5");
    } else {
        time < "5pm";
        document.querySelector(".row9").style.backgroundColor = "green";
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


function get() {
    var storedItem = localStorage.getItem("storedItem");
    console.log("stored Item:", storedItem);
        console.log("stored Item exists");
          storedItem = input.textContent;
         $("#row-1")
             .children("#user-input-1")
            .text(localStorage.getItem("storedItem"));
        $("#row-2")
            .children("#user-input-2")
            .text(localStorage.getItem("storedItem2"));
        $("#row-3")
            .children("#user-input-3")
            .text(localStorage.getItem("storedItem3"));
        $("#row-4")
            .children("#user-input-4")
            .text(localStorage.getItem("storedItem4"));
        $("#row-5")
            .children("#user-input-5")
            .text(localStorage.getItem("storedItem5"));
        $("#row-6")
            .children("#user-input-6")
            .text(localStorage.getItem("storedItem6"));
        $("#row-7")
            .children("#user-input-7")
            .text(localStorage.getItem("storedItem7"));
        $("#row-8")
            .children("#user-input-8")
            .text(localStorage.getItem("storedItem8"));
            $("#row-9")
                .children("#user-input-9")
                .text(localStorage.getItem("storedItem9"));

    } 


const button = document.querySelector("#button-1");
button.addEventListener("click", function () {
     var item = input.val();
    localStorage.setItem("storedItem", item);
    input.val(item);
        console.log(item);
});

const button2 = document.querySelector("#button-2");
button2.addEventListener("click", function () {
     var item2 = input2.val();
    localStorage.setItem("storedItem2", item2);
    input2.val(item2);
    console.log(item2);

});

const button3 = document.querySelector("#button-3");
button3.addEventListener("click", function () {
    var item3 = input3.val();
    localStorage.setItem("storedItem3", item3);
    input3.val(item3);
});

const button4 = document.querySelector("#button-4");
button4.addEventListener("click", function () {
    var item4 = input4.val();
    localStorage.setItem("storedItem4", item4);
    input4.val(item4);
});

const button5 = document.querySelector("#button-5");
button5.addEventListener("click", function () {
    var item5 = input5.val();
    localStorage.setItem("storedItem5", item5);
    input5.val(item5);5
});

const button6 = document.querySelector("#button-6");
button6.addEventListener("click", function () {
    var item6 = input6.val();
    localStorage.setItem("storedItem6", item6);
    input6.val(item6);
});

const button7 = document.querySelector("#button-7");
button7.addEventListener("click", function () {
    var item7 = input7.val();
    localStorage.setItem("storedItem7", item7);
    input7.val(item7);
});

const button8 = document.querySelector("#button-8");
button8.addEventListener("click", function () {
    var item8 = input8.val();
    localStorage.setItem("storedItem8", item8);
    input8.val(item8);
});

const button9 = document.querySelector("#button-9");
button9.addEventListener("click", function () {
    var item9 = input9.val();
    localStorage.setItem("storedItem9", item9);
    input9.val(item9);
});

get();
