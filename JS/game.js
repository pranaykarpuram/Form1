class Game{

    constructor(){

    }

    getState(){
        database.ref("gameState").on("value",function(x){
            gameState = x.val();
        })
    }

    updateState(y){
        database.ref("/").update({
            gameState: y 
            
        })
    }


    start(){
        if(gameState === 0){
         player = new Player();
         player.getCount(); 

         form = new Form();
         form.display();
        }
    }
}