var comppoints = 0;
var playerpoints = 0;


function computerPlay() {

    var randnum;
    var compchoice;
    function getRandNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    randnum = getRandNum(1, 3);

    if (randnum == 1) {
        compchoice = "ROCK";
    }
    else if (randnum == 2) {
        compchoice = "PAPER"
    }
    else if (randnum == 3) {
        compchoice = "SCISSORS"
    }

    return compchoice;
}
function playerSelection() {

    var playerchoice = window.prompt("Enter Your Selection : rock , paper , scissors");
    playerchoice = playerchoice.toUpperCase();
    return playerchoice;
}
function gameplay() {

    var compplay = computerPlay();
    var playselect = playerSelection();
    var result ="";

    console.log("Your play is ", playselect);
    console.log("Computer play is", compplay);

    if (playselect == "ROCK") {
        if (compplay == "PAPER") {
            result = "you lose , paper beats scissors";
            comppoints++;
        }
        else if (compplay == "SCISSORS") {
            result = "you win , rock beats scissors";
            playerpoints++;
        }
        else if (compplay == "ROCK") {
            result = "Tie :) , No Points For Both";
        }
    }
    else if (playselect == "PAPER") {
        if (compplay == "PAPER") {
            result = "Tie :) , No Points For Both";
        }
        else if (compplay == "SCISSORS") {
            result = "you lose , scissors beats paper";
            comppoints++;
        }
        else if (compplay == "ROCK") {
            result = " you win , paper beats rock";
            playerpoints++;
        }
    }
    else if (playselect == "SCISSORS") {
        if (compplay == "PAPER") {
            result = " you win , scissors beats paper";
            playerpoints++;
        }
        else if (compplay == "SCISSORS") {
            result = "Tie :) , No Points For Both";
        }
        else if (compplay == "ROCK") {
            result = " you lose , rock beats scissors";
             comppoints++;
        }
        
        return result;
       
    }

}
function game() {
    let n = 1;
    while (n <= 5) {

    gameplay();
        console.log("Game number ", n);
        console.log("Your Points", playerpoints);
        console.log("Computer Points", comppoints);

        n++;
    }
    if (playerpoints > comppoints) {
        console.log("Congratulations You Won :) :) :) :) ")

    }
    else if (comppoints > playerpoints) {
        console.log("You lose , Computer Wins :( :( :( :(")
    }
    else if (comppoints == playerpoints) {
        console.log("DRAW :|  :|  :|")
    }

}
game();