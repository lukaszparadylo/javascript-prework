{
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
    const startGame = function(){
        computerMove = parseInt(randomMove());
        if(computerMove==playerMove) draw();
        else if((playerMove==rock) && (computerMove==scisours)) winner('player');
        else if((playerMove==rock) && (computerMove==paper)) winner('computer');
        else if((playerMove==scisours) && (computerMove==paper)) winner('player');
        else if((playerMove==scisours) && (computerMove==rock)) winner('computer');
        else if((playerMove==paper) && (computerMove==rock)) winner('player');
        else if((playerMove==paper) && (computerMove==scisours)) winner('computer');
    }

    const draw = function (){
        printMessage('Remis, sprobuj ponownie');
    }

    const winner =function(winner){
        printMessage('The winner is: '+winner);
    }

    const randomMove = function(){
        return Math.floor(Math.random() * 3 + 1);
    }

    const printMessage = function(msg){
        let div = document.createElement('div');
        div.innerHTML = msg;
        document.getElementById('messages').appendChild(div);
    }

    const clearMessages = function(){
        document.getElementById('messages').innerHTML = '';
    }

    const wrongNumber = function(){
        computerMove = parseInt(randomMove());
        playerMove = parseInt(prompt('Niwełaściwy numer wprowadź właściwy - 1: kamień, 2: papier, 3: nożyce.'));
        clearMessages();
        startGame(); 
    }
}
