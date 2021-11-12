
var jackimg;
var bloco;
var bloco2;
var calaçada;
var faixa;
var faixa2;
var faixa3;
var faixa4;
var faixa5;
var faixa6;
var jack;
var dinero, dindin;
var dima, dimaimg;
var espada, sword;

var grupoDinheiro;
var grupoDiamante;
var espadachin;
var score;
var over, overimg;
const PLAY = 1;
const END = 0;

var gameState = PLAY;

function preload(){
  
  jackimg = loadAnimation("Runner-1.png" , "Runner-2.png");

  dindin = loadImage("cash.png");
  dimaimg = loadImage("diamonds.png");
  sword = loadImage("sword.png");

  overimg = loadImage("fimdeJogo.png")
}

function setup(){
  createCanvas(400,400);
  //criar corredor

  

  bloco = createSprite(5,200,5,400);
  bloco.visible = false;

  calçada = createSprite(15,200,25,400);
  calçada2 = createSprite(390,200,25,400);

  bloco2 = createSprite(400,200,5,400);
  bloco2.visible = false;

  faixa = createSprite(120,340,15,60);
  faixa.shapeColor = "withe";

  faixa2 = createSprite(280,340,15,60);
  faixa2.shapeColor = "withe";

  faixa3 = createSprite(120,200,15,60);
  faixa3.shapeColor = "withe";

  faixa4 = createSprite(280,200,15,60);
  faixa4.shapeColor = "withe";

  faixa5 = createSprite(280,80,15,60);
  faixa5.shapeColor = "withe";

  faixa6 = createSprite(120,80,15,60);
  faixa6.shapeColor = "withe";

  grupoDinheiro = new Group();
  grupoDiamante = new Group();
  espadachin = new Group();
  score = 0;

  jack = createSprite(200,340,40,40);
  jack.addAnimation("correr" , jackimg);
  jack.scale = 0.09;
  jack.debug = false;
  



  over = createSprite(200,200);
  over.addImage("gameover" , overimg);
  over.visible = false

}

function draw() {
  background(0);

  if (gameState === PLAY) {
   jack.x =  World.mouseX

  dinheiro();
  diamantes();
  katana();

  if (jack.isTouching(grupoDinheiro)) {
  grupoDinheiro.destroyEach();
  score = score + 50
  }

  if (jack.isTouching(grupoDiamante)) {
    grupoDiamante.destroyEach();
    score = score + 100;
    }

    faixa.velocityY = 6;
   faixa2.velocityY = 6;
   faixa3.velocityY = 6;
   faixa4.velocityY = 6;
   faixa5.velocityY = 6;
   faixa6.velocityY = 6;
   

  if (faixa.y > 420 || faixa2.y > 420) {
  faixa.y = 10;
  faixa2.y = 10;
  }
  if (faixa3.y > 420 || faixa4.y > 420) {
    faixa3.y = 10;
    faixa4.y = 10;
    }
    if (faixa5.y > 420 || faixa6.y > 420) {
      faixa5.y = 10;
      faixa6.y = 10;
      }


  if (jack.isTouching(espadachin)) {
 espadachin.destroyEach();
 gameState = END;
  }


  }else if (gameState === END) {

     faixa.velocityY = 0;
    faixa2.velocityY = 0;
    faixa3.velocityY = 0;
    faixa4.velocityY = 0;
    faixa5.velocityY = 0;
    faixa6.velocityY = 0;

  jack.visible = false;
  over.visible = true;

  }
 

 jack.collide(bloco);
 jack.collide(bloco2);
 drawSprites();
 text("pontuaçao " +score,290,20)

}

function dinheiro() {
  if (frameCount % 150 === 0) {
dinero = createSprite(200,-20,1,1);
dinero.addImage("money", dindin);
dinero.scale = 0.1;
dinero.velocityY = 3;
dinero.x = Math.round(random(30,380));
dinero.lifetime = 133;
grupoDinheiro.add(dinero);
  }
 
}

function diamantes() {
  if (frameCount % 200 === 0) {
dima = createSprite(200,-20,1,1);
dima.addImage("diamonds", dimaimg);
dima.scale = 0.02;
dima.velocityY = 4;
dima.x = Math.round(random(30,380));
dima.lifetime = 110;
grupoDiamante.add(dima);
  }
}

function katana() {
  if (frameCount % 170 === 0) {
espada = createSprite(200,-20,1,1);
espada.addImage("esgrima", sword);
espada.scale = 0.1;
espada.velocityY = 4;
espada.x = Math.round(random(30,380));
espada.lifetime = 110;
espadachin.add(espada);
  }
}

