let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let btn = document.getElementById("result")

let showResult = document.getElementById("showResult")






function computerChoice(){
    
    let x = Math.floor(Math.random()*3 +1);
    let chosen = "";
    if(x===1){
        return chosen = "rock"
    }else if(x===2){
        return chosen = "paper"
    }else{
        return chosen = "scissor"
    }
    
   }
//    console.log(computerChoice())

let compuerSelection = computerChoice();
let playerSelection = "";
   

  function playRound(playerSelection,compuerSelection){
    // let playerSelection = prompt("Rock Paper Scissor ! Choose One").toLowerCase();
   
    let result ="";
    if(playerSelection===compuerSelection){
         result = `Game tied as ${playerSelection} and ${compuerSelection} are same`
         showResult.textContent ="0";
    }else if(playerSelection==="rock" &&  compuerSelection==="scissor"){
         result =`You Win! ${playerSelection} beats ${compuerSelection} `
         showResult.textContent ="1";
    }else if(playerSelection==="paper" &&  compuerSelection==="rock"){
        result =`You Win! ${playerSelection} beats ${compuerSelection} `
        showResult.textContent ="1";
    }else if(playerSelection==="scissor" &&  compuerSelection==="paper"){
        result =`You Win! ${playerSelection} beats ${compuerSelection} `
        showResult.textContent ="1";
    }
    else{
         result=`You Lose! ${compuerSelection} beats ${playerSelection}`
         showResult.textContent ="-1";
    }
    btn.textContent = result
  }

  rock.addEventListener("click",()=>{
    playRound("rock",compuerSelection)
})

paper.addEventListener("click",()=>{
   playRound("paper",compuerSelection)
})

scissor.addEventListener("click",()=>{
    playRound("scissor",compuerSelection)
})

//   while (i<5) {
//     playRound();
//     i++;
//   };


// for (let i = 0; i < 5; i++) {
//     playRound()
// }
