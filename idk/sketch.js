var database;
var form,player,game;
var gameState=0;
var playerCount=0;
var allPlayers;
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    game= new Game();
    game.getState();
    game.start();
}   

function draw(){
    background("white");
    if(playerCount===4)
    {
        game.updateState(1);
    }
    if(gameState===1)
    {
        clear();
        game.play();
    }
 
}

