var readlin=require("readline-sync")
// npm install chalk
const chalk=require('chalk')
var score=0
//welcome
var x=readlin.question(chalk.green("What's Your Name? "))
console.log("Welcome "+x+", nice to hear that you are interested in this quiz.")
console.log("\n")

//Do you know?
var know=readlin.question("Do you know Sarthak? (Yes/No) ")
if(know==="Yes"){
  console.log("Good to hear! I think if you know him you know he is also a great himym fan.")
}
else if(know==="No"){
  console.log("Oh fine! he is also a fan of himym.")
}
else{
  console.log("He is also a fan of himym.")
}
console.log("\n")

//begins
console.log("The next are some questions that you can relate..😊")
// \nPlease remember it is case sensitive:- Answer Should be like this ex:- Ted,Robin.\ni.e. Fisrt alphabet is capital")

console.log("\n")
//que1
// var que1=readlin.question("Question 1: What type of animal beat up Ted?")
var highscores=[
  {
    name:"Sarkar",
    score:10,
  },
  {
    name:"Milan",
    score:9,
  }
]
function play(question,answer,right){
  
  var ca=readlin.keyInSelect(answer)
  // console.log(" \nAnswer: ")
  // console.log(ca)
  if((ca+1)===right){
    console.log("Congrats you are right! ")
    score++;
  }
  else{
    console.log("Sorry to say you're wrong.")
    // console.log("Congrats you are right! "+answer[ca]+" go to home.")
    console.log("The right answer is "+answer[right-1]+".")
  }
  console.log("Current Score: "+score)
  console.log("\n")
}
questions=[{
  question:"What type of animal beat up Ted?",
  answer: ['Lion', 'Elephant', 'Crocodile', 'Goat'],
  right: 4,
},
{
  question: "If Ted and Barney opened their own bar, what would it be called?",
  answer: ["Puzzles",'HoneyComb','Ted-Bar','Newclub'],
  right: 1,
},
{
  question: "What's the name of Marshall and Lily's baby?",
  answer: ["Marshall","Maxwell","Marvin","Oliver"],
  right: 3,
},
{
  question: "Who left Ted at the altar?",
  answer: ["Stella","Zoey","Robin","Victoria"],
  right: 1,
},
{
  question:"Who Is The Last Person Ted Dates Before Meeting The Mother?",
  answer: ["Zoey","Jeanette","Robin","Victoria"],
  right: 2,
},{
  question:"What Did Barney Wear For A Year After Losing A Bet?",
  answer: ["Dueshy Tie","Ducky tie","Dirty Tie","Double Tie"],
  right: 2,
},{
  question:"What Is The Name Of Barney's Brother?",
  answer: ["Jackson","Josh","James","Jimmy"],
  right: 3,
},{
  question:"Who Was Doctor X?",
  answer: ["Marshall","Scooter","Lily","Ted"],
  right: 4,
},{
  question:"What embarrassing tattoo does Ted get in Season 3?",
  answer: ["Spider","Butterfly","Dragon","Beast"],
  right: 2,
},
]
for(var i=0;i<questions.length;i++){
  var cq=questions[i];
  console.log("Question-"+(i+1)+": "+cq.question)
  play(cq.question,cq.answer,cq.right)
  console.log("\n")
}
console.log("Your Final Score is: "+score)
if(score>=8){
  console.log("Hurrah! you are master at HIMYM.")
}
else if(score>=5 && score<8){
  console.log("You are moderate you can retry this quiz once again.")
}
else{
  console.log("You are noob please go and watch Legendary HIMYM once again.")
}
console.log("\n")
var t=readlin.question("What do you think ted should end up with? \nAnswer: ")
console.log("Nice to hear, that's your choice.")
var arlen=highscores.length
highscores[arlen]={name: x,score: score}
console.log("\n")

for(i=0;i<=0;i++){
  var cs=highscores[i];
  console.log("High Score is "+cs.score+" of "+cs.name+".")
}

for(i=1;i<highscores.length;i++){
  var cs=highscores[i];
  console.log("Other Scores are "+cs.score+" of "+cs.name+".")
}

