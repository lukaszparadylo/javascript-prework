rock = 1;
scisours = 2;
paper = 3;
let computerMove = parseInt(randomMove());
let playerMove = parseInt(prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'));

startGame();
function startGame(){
    if((playerMove>3) || (playerMove<1)) wrongNumber();
    if(computerMove==playerMove) draw();
    else if((playerMove==rock) && (computerMove==scisours)) winner('player');
    else if((playerMove==rock) && (computerMove==paper)) winner('computer');
    else if((playerMove==scisours) && (computerMove==paper)) winner('player');
    else if((playerMove==scisours) && (computerMove==rock)) winner('computer');
    else if((playerMove==paper) && (computerMove==rock)) winner('player');
    else if((playerMove==paper) && (computerMove==scisours)) winner('computer');
}

function draw(){
    computerMove = parseInt(randomMove());
    playerMove = parseInt(prompt('Remis sprubój ponownie - 1: kamień, 2: papier, 3: nożyce.'));
    clearMessages();
    startGame();
}

function winner(winner){
    printMessage('The winner is: '+winner);
}

function randomMove(){
    return Math.floor(Math.random() * 3 + 1);
}

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function wrongNumber(){
    computerMove = parseInt(randomMove());
    playerMove = parseInt(prompt('Niwełaściwy numer wprowadź właściwy - 1: kamień, 2: papier, 3: nożyce.'));
    clearMessages();
    startGame(); 
}
