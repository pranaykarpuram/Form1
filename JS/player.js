class Player{

    constructor(){

    }

    getCount(){
        database.ref("playerCount").on("value",function(x){
            playerCount = x.val();
        })
    }
    updateCount(y){
        database.ref("/").update({
            playerCount: y
        })
    }
    update(name){
        var playerIndex = "player "+ playerCount;
        database.ref(playerIndex).set({
            name: name
        })
    }

}