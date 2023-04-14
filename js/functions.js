const rock = 1;
const scisours = 2;
const paper = 3;
let computerMove;
let playerMove;

document.getElementById('rock').addEventListener('click', function(){
    playerMove = 1;
    startGame();
});
document.getElementById('scisours').addEventListener('click', function(){
    playerMove = 2;
    startGame();
});
document.getElementById('paper').addEventListener('click', function(){
    playerMove = 3;
    startGame();
});
function startGame(){
    computerMove = parseInt(randomMove());
    if(computerMove==playerMove) draw();
    else if((playerMove==rock) && (computerMove==scisours)) winner('player');
    else if((playerMove==rock) && (computerMove==paper)) winner('computer');
    else if((playerMove==scisours) && (computerMove==paper)) winner('player');
    else if((playerMove==scisours) && (computerMove==rock)) winner('computer');
    else if((playerMove==paper) && (computerMove==rock)) winner('player');
    else if((playerMove==paper) && (computerMove==scisours)) winner('computer');
}

function draw(){
    printMessage('Remis, sprobuj ponownie');
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
