let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;

let choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        // <img id="rock">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".jpg";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".jpg";

    //it's going to be random for the opponent
    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponents-choice").src = opponent + ".jpg";

    //check for winner
    if (you == opponent) {
        yourScore += 1;
        opponentScore += 1;
    }
    else {
        if (you == "rock"){
            if (opponent == "scissors") {
                yourScore += 1;
            }
            else if (opponent == "paper"){
                opponentScore += 1;
            }
        }
        else if (you == "scissors"){
            if (opponent == "paper") {
                yourScore += 1;
            }
            else if (opponent == "rock"){
                opponentScore += 1;
            }
        }
        else if (you == "paper"){
            if (opponent == "rock") {
                yourScore += 1;
            }
            else if (opponent == "scissors"){
                opponentScore += 1;
            }
        }
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponents-score").innerText = opponentScore;

    if (yourScore === 5 || opponentScore === 5) {
        if (yourScore > opponentScore) {
            document.getElementById("winner").innerText = "You win!";
        } else if (yourScore < opponentScore) {
            document.getElementById("winner").innerText = "Opponent wins!";
        } else {
            document.getElementById("winner").innerText = "It's a draw!";
        }
        
        yourScore = 0;
        opponentScore = 0;
        document.getElementById("your-score").innerText = yourScore;
        document.getElementById("opponents-score").innerText = opponentScore;
    
    }
}