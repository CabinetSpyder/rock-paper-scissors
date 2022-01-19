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


function playRound(playerSelection, computerSelection){
    /* Make the player's Selection case sensitive */
    playerSelection = playerSelection.toUpperCase();
    playerSelection = playerSelection.toLowerCase();

    /* Implement the rock paper sicssors logic */
    /* 3 posible outcomes: you win, computer does or it's a tie*/
    if(playerSelection ===  computerSelection){
        return "It's a tie";

        /* All the cases in wich the player wins */
    }else if( ((playerSelection === "rock") && (computerSelection === "scissors")) || 
            ((playerSelection === "paper") && (computerSelection === "rock")) ||
            ((playerSelection === "scissors") && (computerSelection === "paper")) ){

        return "You win";

    }else {
        return "Computer wins";
    }

}

function game(){
    let playerSelection; 
    let playerWins = 0;
    let computerWins = 0;
    let roundResult;

    for(let i=0; i<5; i++){
        playerSelection = prompt("Choose: Rock, Paper, Sicssors");
        roundResult = playRound(playerSelection, computerPlay());

        if(roundResult === "You win"){
            playerWins++;

        }else if(roundResult === "Computer wins"){
            computerWins++;
        }

        console.log(roundResult);
    }

    if(playerWins > computerWins){
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
        console.log("You Win!!!!!!");

    }else if(playerWins < computerWins){
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
        console.log("Computer Wins");

    }else{
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
        console.log("It's a tie");
    }

}

game();