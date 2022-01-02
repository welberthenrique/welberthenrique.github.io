//placar do jogo
let pontosJogador1 = 0;
let pontosJogador2 = 0;
let marcouPonto = false;

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(30,144,255)); //Pontos jogador 1
  rect(130,20, 40, 20);
  fill(255);
  text(pontosJogador1, 150, 36);
  fill(color(255,0,0)); //Pontos jogador 2
  rect(430,20, 40, 20);
  fill(255);
  text(pontosJogador2, 450, 36);
}

function marcaPontoJogador1(){
  marcouPonto = collideRectCircle(xBalizas[1], yBalizas[1], comprimentoBaliza, alturaBaliza, xBolinha, yBolinha, raio);
  
  if(marcouPonto){
    pontosJogador1 +=1;
    xBolinha = 300;
    gol.play();
  } 
}

function marcaPontoJogador2(){
  
  marcouPonto = collideRectCircle(xBalizas[0], yBalizas[0], comprimentoBaliza, alturaBaliza, xBolinha, yBolinha, raio);
  
  if(marcouPonto){
    pontosJogador2 +=1;
    xBolinha = 300;
    gol.play();
  }
}

function posicaoInicial(){
  xBolinha = 300;
}


