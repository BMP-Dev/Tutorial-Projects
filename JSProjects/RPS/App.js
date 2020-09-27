const userScore = {s:0};
const computerScore = {s:0};
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices =["rock","paper","scissors"];
  return choices[Math.floor(Math.random()*choices.length)];
}

function glowTimer(classElem, glow){
  classElem.add(glow);
  setTimeout(()=>{
    classElem.remove(glow);
  },1000);
}

function win(winnerSpan,s_ToInc,uChoice,cChoice) {
  const glows =document.getElementById(uChoice[0]).classList;
  const smallUserWord="user".fontsize(3).sub();
  const smallCompWord="comp".fontsize(3).sub();
  result_div.innerHTML=`${uChoice}${smallUserWord} against
   ${cChoice}${smallCompWord}`;
  if(winnerSpan!=="DRAW"){
    winnerSpan.innerHTML =  ++s_ToInc.s;
    if(winnerSpan.id.includes("user")){
      result_div.innerHTML+=". USER WINS.";
      glowTimer(glows,'green-glow');
    }
    else{
      result_div.innerHTML+=". COMPUTER WINS.";
      glowTimer(glows,'red-glow');
    }
  }
  else{
    result_div.innerHTML+=". Draw.";
    glowTimer(glows,'grey-glow');
  }
}

function game(userChoice){
 const computerChoice = getComputerChoice();
 switch(userChoice[0] + computerChoice[0]) {
   case "rs":
   case "sp":
   case "pr":
    win(userScore_span, userScore,userChoice,computerChoice);
    break;
   case "rp":
   case "ps":
   case "sr":
    win(computerScore_span, computerScore,userChoice,computerChoice);
    break;
   default:;
    win("DRAW", null,userChoice,computerChoice);
    break;
 }
}

function main() {
  rock_div.addEventListener('click', ()=>{
    game("rock");
  });
  paper_div.addEventListener('click', ()=>{
    game("paper");
  });
  scissors_div.addEventListener('click', ()=>{
    game("scissors");
  });
}

main()
