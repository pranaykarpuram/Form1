var hypnoticBall, database;
var position;
var form;
var game;
var player;
var gameState = 0;
var playerCount = 0;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth,windowHeight);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  
  
  
}

/*function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}*/
