class Form{

    constructor(){
        
    }

    display(){
        var heading = createElement('h1','Car Racing Game');
        heading.position(width/2-100,100);

        var inputBox = createInput('');
        inputBox.position(width/2,height/2);

        var button = createButton('PLAY');
        button.position(width/2,height/2+200);
        button.mousePressed(function(){
            heading.hide();
            inputBox.hide();
            button.hide();
            var greeting = createElement('h2');
            greeting.html('Hello '+inputBox.value());
            greeting.position(width/2-100,height/2);
            var greeting2 = createElement('h3');
            greeting2.html('Wait for the other players to join...');
            greeting2.position(width/2-300,height/2+300);
            playerCount = playerCount+1;
            player.updateCount(playerCount);
            player.update(inputBox.value());
        });

    }
}