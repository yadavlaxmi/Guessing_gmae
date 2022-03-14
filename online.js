
var readlineSync= require("readline-sync")
var user=readlineSync.questionInt("enter your guessing number==")
computers_choice=[1,2,3,4,5,6,7,8,9,0]
var computer_choice=computers_choice[Math.floor(Math.random()*computers_choice.length)]
if (user==computer_choice){
  console.log("you are winner")
}
else{
  console.log("you loss the game")
}
console.log("correct guessing number",computer_choice)
