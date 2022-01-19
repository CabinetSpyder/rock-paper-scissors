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
        return "Rock";

    }else if(choice === 2){
        return "Paper";
        
    }else if(choice == 3){
        return "Scissors";
    }
}



