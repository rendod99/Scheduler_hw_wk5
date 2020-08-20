//var container = $('.container')
//var currentDayEl = $('#currentDay')
var m = moment();
var toString = (m.toString())

$('#currentDay').append(m.format("dddd MMM Mo YYYY"));


$(".table").addClass("time-block");
$(".row").addClass("row");
$(".hour").addClass("hour"); 
$(".container").addClass("description");
$(".save").addClass("saveBtn");


