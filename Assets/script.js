


const time = document.getElementById("currentDay");

setInterval(() => {
    const now =  moment();
    const humanReadable = now.format('MMMM Do YYYY, h:mm:ss a');

    time.textContent = humanReadable;    
}, 1000)

var hour = document.getElementsByTagName("span");
var textBox = document.getElementsByTagName("textarea");

if (hour > moment.format('h a')) {
    textBox.classList.add("past")
} else if (hour === moment.format('h a')) {
    textBox.classList.add("present")
} else {
    textBox.classList.add("future")
}




