class Form 
{
    constructor(){
        this.title=createElement('h2');
        this.input=createInput("").attribute("placeholder","Name");
        this.button=createButton("Play");
        this.greeting=createElement('h3');
        this.button2=createButton("RESET");

    }
    hide()
    {
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }
    display()
    {
       
        this.title.html("CAR RACING GAME");
        this.title.position(400,100);

        
        this.input.position(400,260);
        
        this.button.position(450,300);
        this.button2.position(500,100);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name=this.input.value();

            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("WELCOME   "+player.name);
            this.greeting.position(400,260);
        })
        
        this.button2.mousePressed(()=>{
            player.updateCount(0);
            game.updateState(0);
            database.ref('players').remove()
        })
    }
}
