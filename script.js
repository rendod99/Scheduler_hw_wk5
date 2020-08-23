//Variables
var m = moment();
var toString = (m.toString())
var currentTime = m.format('h:mma');
var button = document.querySelector("button")
var text = document.querySelector("input")
var timeBlock1= $("#time1").text();
var timeBlock2= $("#time2").text();
var timeBlock3= $("#time3").text();
var timeBlock4= $("#time4").text();
var timeBlock5= $("#time5").text();
var timeBlock6= $("#time6").text();
var timeBlock7= $("#time7").text();
var timeBlock8= $("#time8").text();
var timeBlock9= $("#time9").text();
var event1= $("#event1");
var event2= $("#event2");
var event3= $("#event3");
var event4= $("#event4");
var event5= $("#event5");
var event6= $("#event6");
var event7= $("#event7");
var event8= $("#event8");
var event9= $("#event9");

 
//adding css classes
$('#currentDay').append(m.format("dddd MMM Do YYYY"));
$(".row").addClass("row");
$(".hour").addClass("hour"); 
$(".container").addClass("time-block");
$(".save").addClass("saveBtn");
$("#input1").addClass("past");
$("#event1").addClass("row");

// Function
function compareTime(time1, time2, event){
    if(moment(time1, 'h:mma').isBefore(moment(time2, 'h:mma'))){
        $(event).addClass("future");
    } else if(moment(time1, 'h:a').isSame(moment(time2, 'h:a'))){
        $(event).addClass("present");
        } else {$(event).addClass("past");

        }
};






//Function calls
compareTime(currentTime, timeBlock1, event1);
compareTime(currentTime, timeBlock2, event2);
compareTime(currentTime, timeBlock3, event3);
compareTime(currentTime, timeBlock4, event4);
compareTime(currentTime, timeBlock5, event5);
compareTime(currentTime, timeBlock6, event6);
compareTime(currentTime, timeBlock7, event7);
compareTime(currentTime, timeBlock8, event8);
compareTime(currentTime, timeBlock9, event9);



const saveToLocalStorage = () => {
    localStorage.setItem('event1'.text.value )
}

button.addEventListener("click", saveToLocalStorage)



