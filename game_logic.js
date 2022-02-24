// https://www.youtube.com/watch?v=hQZtbEPLKJM

let playerWins = 0;
let computerWins = 0;
let tiesCount = 0;
const docTiesCount = document.querySelector("#ties");
const docPlayerScore = document.querySelector("#playerScore");
const docComputerScore = document.querySelector("#computerScore");
const resetButton = document.querySelector("#reset");
const docScoreDiv = document.querySelector("#score");
resetButton.addEventListener("click", resetGame);



function startGame(){
    const rockButton = document.querySelector("#rock");
    rockButton.addEventListener("click", () =>{        
        playRound("rock", computerPlay());
    });
    const paperButton = document.querySelector("#paper");
    paperButton.addEventListener("click", () =>{        
        playRound("paper", computerPlay());
         
    });

    
    const scissorsButton = document.querySelector("#scissor");
    scissorsButton.addEventListener("click", () =>{ 
        playRound("scissors", computerPlay());
       
    });
}




function getRandomInt (min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function computerPlay(){
    /* Obtein a randomly a 1, 2 o 3 */
    let choice = getRandomInt(1, 3);

    /* If choice = 1, then return Rock 
        If choice = 2, then return Paper
        If choice = 3, then return Scissors
    */
    if( choice === 1){
        return "rock";

    }else if(choice === 2){
        return "paper";
        
    }else if(choice == 3){
        return "scissors";
    }
}

function resetGame(){
    //Reset all the parameters to start a new game
    playerWins = 0;
    computerWins = 0;
    tiesCount = 0;
    docTiesCount.textContent = `Ties: ${tiesCount}`;
    docPlayerScore.textContent = `Player wins: ${playerWins}`;
    docComputerScore.textContent = `Computer wins: ${computerWins}`;
    resetButton.style.visibility = "hidden";
    //Remove the previous winner
    docScoreDiv.removeChild(docScoreDiv.lastChild);

}

function playRound(playerSelection, computerSelection){
    //Check if somebody already won 5 times
    if(playerWins>=5 || computerWins>=5){
        return;
    }
    
    
    /* Make the player's Selection case sensitive */
    playerSelection = playerSelection.toUpperCase();
    playerSelection = playerSelection.toLowerCase();

    /* Implement the rock paper sicssors logic */
    /* 3 posible outcomes: you win, computer does or it's a tie*/
    if(playerSelection ===  computerSelection){
        tiesCount++;     
        docTiesCount.textContent = `Ties: ${tiesCount}`

    /* All the cases in wich the player wins */
    }else if( ((playerSelection === "rock") && (computerSelection === "scissors")) || 
            ((playerSelection === "paper") && (computerSelection === "rock")) ||
            ((playerSelection === "scissors") && (computerSelection === "paper")) ){

        playerWins++;
        docPlayerScore.textContent = `Player wins: ${playerWins}`;

    }else {
        computerWins++;
        docComputerScore.textContent = `Computer wins: ${computerWins}`;
    }

    // Must have here beacuse if we reach the winner threashold, then we have to push a button again
    if(playerWins>=5 || computerWins>=5){
        resetButton.style.visibility = "visible";
        const winner = document.createElement("h1");
        if(playerWins>=5){
            winner.textContent = "Player Wins!!!!!!!!";
        }else{
            winner.textContent = "Computer Wins!!!!!";
        }
        docScoreDiv.appendChild(winner);
        
        return;
    }

}

startGame();