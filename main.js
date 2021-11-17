
let roundsDiv = document.querySelector('.rounds');
let diceImg = document.querySelector('#dice');
let headers = document.querySelectorAll('header');
let mains = document.querySelectorAll('main');
let winner = document.querySelector('.winner');
let footers = document.querySelectorAll('footer');

let round = 0;
let player1Score = 0;
let player2Score = 0;
let turn = 1;

function askForPlayerNames() {
    let player1 = prompt('Enter player1 name');
    let player2 = prompt('Enter player2 name');
    headers[0].innerHTML = player1;
    headers[1].innerHTML = player2;

    rollDice();
}
askForPlayerNames();

function displayScore(dice) {
    if (turn === 1) {
        round++;
        roundsDiv.innerHTML = round;
        mains[0].innerHTML = dice;
        player1Score += dice;
        footers[0].innerHTML = "Total : "+player1Score;
        turn++;
        rollDice();
    } else {
        mains[1].innerHTML = dice;
        player2Score += dice;
        footers[1].innerHTML = "Total : "+player2Score;
        turn--;
        
        if(round < 3){
            rollDice();
        }else{
            displayWinner();
        }
    }
}

function displayWinner() {
    if (player1Score > player2Score) {
        mains[0].style.background = "#ff6347";
        winner.innerHTML = "Winner!!!";
    } else if(player1Score < player2Score) {
        mains[1].style.background = "#ff6347";
        winner.innerHTML = "Winner!!!";
    }else{
        mains[0].style.background = "#ff6347";
        mains[1].style.background = "#ff6347";
        winner.innerHTML = "No Winner";
    }
}


function rollDice() {
    let counter = 0;
    
    let loop = setInterval(function () {
        let rand = Math.ceil(Math.random()*6);
        counter++;
        diceImg.setAttribute('src',`../images/dice-${rand}.png`);
        if (counter > 30) {
            clearInterval(loop);
            displayScore(rand);
        }
    },50)
}