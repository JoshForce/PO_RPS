
function rockPaperScissors(player1, player2){
    if (player1 === player2){
        return "TIE!";
    }
    else if (player1 === 'rock'){
        if (player2 === 'paper'){
            return "Player 2 wins!";
        }
        else if (player2 === "scissors"){
            return "Player 1 wins!";
        }
    }

    else if (player1 === 'paper'){
        if (player2 === 'rock'){
            return "Player 1 wins!";
        }
        else if (player2 === "scissors"){
            return "Player 2 wins!";
        }
    }

    else if (player1 === 'scissors'){
        if (player2 === 'paper'){
            return "Player 1 wins!";
        }
        else if (player2 === "rock"){
            return "Player 2 wins!";
        }
    }
    
}

const choices = ['rock', 'paper', 'scissors'];
let player1 = choices[Math.floor(Math.random() *3)];
let player2 = choices[Math.floor(Math.random() *3)];

console.log(rockPaperScissors(player1,player2));