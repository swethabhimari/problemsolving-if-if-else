//1
// Variables to represent the state of the house
var isInRoom = false;  // Whether someone is in the room
var season = "winter"; // Current season, can be "summer" or "winter"
var isAtHome = false;  // Whether someone is at home
// Lights 
if (!isInRoom) {
    console.log("Turning off the lights.");
} else {
    console.log("Keeping the lights on.");
}
// Temperature 
if (season === "winter") {
    console.log("Setting temperature to 22°C.");
} else if (season === "summer") {
    console.log("Setting temperature to 18°C.");
} else {
    console.log("Temperature not changed.");
}
// locking doors
if (!isAtHome) {
    console.log("Locking the door.");
} else {
    console.log("Door remains unlocked.");
}
//2.
var mmarks=85;
var smarks=87;
if(mmarks>= 50 && smarks>=50){
    console.log("Pass and graduated")
}else{
console.log("Fail and not graduated")
}
//3.
var ticket=480;
var meal=false;
var time="evening";
if(ticket<500 && (!meal || time === "morning" ))
{
console.log("book ticket");
}
else{
    console.log("look for another flight");
}
//4.
var ram="8GB RAM";
var gcard="good";
var budget=80000;
if(ram==="8GB RAM" && gcard==="good" && budget===80000){
    console.log("buy it");
}else{
    console.log("look for altenative laptop");
}
//5.
var attendance=85;
var grade="B";
if(attendance>80 && (grade === "B" || grade === "A"))
    console.log("student can attend trip");
else("student cannot attend the trip");