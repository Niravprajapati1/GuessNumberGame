let computerGuess;
let userGuess=[];
let reaction = document.querySelector('#reaction');
let usernumUpdate =document.querySelector('#inputBox');
const init = ()=>{
  computerGuess=Math.floor(Math.random()*100)
 document.querySelector('#newGame').style.display='none';
 document.querySelector('#secondScreen').style.display='none';
}

const startGame = ()=>{
  document.querySelector('#firstScreen').style.display='none';
   document.querySelector('#secondScreen').style.display='flex';
}
const startnewGame = ()=>{
  document.querySelector('#newGame').style.display='inline';
  usernumUpdate.setAttribute("disabled",true);
  
}
const newgameBegin = ()=>{
  window.location.reload();
}
const logic = ()=>{
  let userNum = Number(document.querySelector('#inputBox').value);
  userGuess = [...userGuess,userNum];
  document.querySelector('#guesses').innerHTML = userGuess;
  
  if(userGuess.length<maxGuess){
  if (userNum>computerGuess) {
    reaction.innerHTML = "Your Guess is to high 😅";
    usernumUpdate.value="";
  }
  
  else if(userNum<computerGuess){
    reaction.innerHTML = "Your Guess is to low 🥺🥺🥺";
      usernumUpdate.value="";
  }
  else {
    reaction.innerHTML = "Your won !!! 🥳🏆🥳";
      usernumUpdate.value="";
      startnewGame()
  }
  }
  
  //lossing
  else{
    if (userNum > computerGuess) {
      reaction.innerHTML = `you loose 😭! currect number was ${computerGuess}`;
      usernumUpdate.value = "";
      startnewGame()
    }
    
    else if (userNum < computerGuess) {
        reaction.innerHTML = `you loose 😭! currect number was ${computerGuess}`;
        startnewGame()
    }
    else {
      reaction.innerHTML = "Your won !!! 🥳🏆🥳";
      
      usernumUpdate.value = "";
      startnewGame()
    }
  }
  document.getElementById('attempts').innerHTML=userGuess.length;
}
const easy = ()=>{
  maxGuess = 10;
  startGame();
}
const hard = ()=>{
     maxGuess = 5;
    startGame();
}
