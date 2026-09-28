alert("Welcome to the Blue Lock Project!"); 
var animeName = prompt("Pick an Anime Character"); 
var numPick = prompt("Pick a number between 1-300"); 
var soccerPosition = prompt("Pick a Soccer Position"); 
var verbIsagi = prompt("Pick a verb that ends with ING"); 
var friendName = prompt("Pick a Name of Your friend"); 

var message = "Today is the day you finally got to be a part of the Blue Lock Project! After you got accepted, you finally went to the designated building and saw " + animeName + ", you didn't even know they played soccer. After you got your uniform you realized you were number " + numPick + " out of all the players, despite your number you decided to work hard."; 

var message2 = "Today was your match against another team, you were playing as a " + soccerPosition + ", which was easy due to you playing this position before. As you were on the field you saw Isagi " + verbIsagi + " to the ball. You knew you needed to get the ball back and teamed up with " + friendName + ", allowing you to win the match!"; 

document.write(message); 
document.write("<br>"); 
document.write(message2);
