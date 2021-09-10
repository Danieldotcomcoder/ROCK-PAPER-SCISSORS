comppoints = 0;
playerpoints = 0;
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

    let compplay = computerPlay();
    let playselect = playerSelection();


    console.log("Your play is ", playselect);
    console.log("Computer play is", compplay);



    if (compplay == "ROCK") {
        if (playselect == "PAPER") {
            result = "you win , paper beats rock"
            playerpoints++;
        }
        else if (playselect == "SCISSORS") {
            result = "you lose , rock beats scissors"
            comppoints++;
        }
        else if (playselect == "ROCK") {
            result = "Tie :) , No Points For Both"
        }
    }
    else if (compplay == "PAPER") {
        if (playselect == "PAPER") {
            result = "Tie :) , No Points For Both"
        }
        else if (playselect == "SCISSORS") {
            result = "you win , scissors beats paper"
            playerpoints++;
        }
        else if (playselect == "ROCK") {
            result = " you lose , paper beats rock"
            comppoints++;
        }
    }
    else if (compplay == "SCISSORS") {
        if (playselect == "PAPER") {
            result = " you lose , scissors beats paper"
            comppoints++;
        }
        else if (playselect == "SCISSORS") {
            result = "Tie :) , No Points For Both"
        }
        else if (playselect == "ROCK") {
            result = " you win , rock beats scissors"
            playerpoints++;
        }
    }

    console.log(result);
}


function game() {
    let n = 1;
    while (n <= 5) {
        gameplay();
        
        console.log("Game number ", n)
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
    else if(comppoints == playerpoints){
        console.log("DRAW :|  :|  :|")
    }

}
game();