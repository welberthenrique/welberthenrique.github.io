//Variaveis do ator

xAtor = 200;
yAtor = 365;

//Variaveis da colisao
let colisao = false;

//Variaveis dos pontos
let meusPontos = 0;
let score = 0;


function mostraAtor(){
  image(ator, xAtor, yAtor, 30, 30);
}


function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
      yAtor -=3;
  }


  if(keyIsDown(DOWN_ARROW)){
   if(podeMexerAtorDown()){
      yAtor +=3;}
  }
}  

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)

  for(let i = 0; i < imagemCarros.length; i++){  
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro ,alturaCarro, xAtor, yAtor, 15);
    if(colisao){
      colidiu.play();
      marcaScore();
      if(pontosMaiorQueZero(meusPontos)){
      meusPontos -= 1;}
      retornaAtorPosicaoInicial();
      
      
    }
  }
}

function retornaAtorPosicaoInicial(){
  yAtor = 365;
}

function incluiPontos(){
  textSize(25);
  textAlign(CENTER);
  fill(color(255,260,60));
  text(meusPontos, 60, 27);
}

function incluiScore(){
  textAlign(CENTER);
  fill(color(255,260,60));
  textSize(20);
  text("SCORE", 250, 27);
  textSize(25);
  text(score, 300, 27);
}

function marcaPonto(){
  if(yAtor < 15){
    pontos.play();
    meusPontos+=1;
    retornaAtorPosicaoInicial();
    
  }
}

function marcaScore(){
  if(meusPontos >= score){
    score=meusPontos;
  }
}

function pontosMaiorQueZero(pontos){
    return pontos > 0;
}

function podeMexerAtorDown(){
  return yAtor < 365;
}