class Game{
    
    constructor(){}
    getState()
    {
        var gameref=database.ref('gameState');
        gameref.on("value", function(data){
            gameState=data.val();
        })
    }
    updateState(state)
    {
        database.ref('/').update({
            gameState:state
        })
    }
    async start()
    {
        if(gameState===0)
        {
            player=new Player();
            var playerCountRef=await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }
            form=new Form();
            form.display();
        }
    }
    play()
    {
        form.hide();
        textSize(50);
        text("GAME START", 200,100);
        Player.getPlayerInfo();
        if(allPlayers !==undefined)
        {
            var displayPosition=130;
            //displayPosition=displayPosition+20
        
            //for(var p=0; p<4;p++)
            for (var p in allPlayers){
            if(p==="player"+player.index)
            {
                fill("red");
            }
            else{
                fill("black")
            }
            displayPosition+=20;
            textSize(20);
            text(allPlayers[p].name+":"+allPlayers[p].distance,300,displayPosition);
            }
            if(keyIsDown(UP_ARROW) && player.index !== null)
            {
                player.distance+=50;
                player.update();
            }

        }
    }
}