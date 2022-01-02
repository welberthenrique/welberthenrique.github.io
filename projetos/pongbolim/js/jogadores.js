let automatico = false; //true para automatico, false para manual (W/S)

//Variaveis da jogador1
let xJogadores1 = [90, 400];
let yJogadores1 = [100,100];
let xJogadores2 = [200, 500];
let yJogadores2 = [200, 200];
let comprimentoJogador = 10;
let alturaJogador = 70;

//Variaveis do Jogador2 Modo Automatico

let velocidadeyJogador2;

function mostraJogador1(){
  for(let i = 0; i < xJogadores1.length; i++){
    rect(xJogadores1[i], yJogadores1[i],comprimentoJogador,alturaJogador);
    }
}

function mostraJogador2(){
  for(let i = 0; i < xJogadores2.length; i++){
     rect(xJogadores2[i],yJogadores2[i],comprimentoJogador,alturaJogador);
  }
}

function movimentaJogador1(){
  
  if(keyIsDown(DOWN_ARROW)){
      for(let i = 0; i < xJogadores1.length; i++){
        if(podeMexerJogadorDown(yJogadores1[i])){
          yJogadores1[i]+=10;
      }
    }
  }else if (keyIsDown(UP_ARROW)){
      for(let i = 0; i < xJogadores1.length; i++){
        if(podeMexerJogador(yJogadores1[i])){
          yJogadores1[i]-=10;
        }
      }
  }
}

function movimentaJogador2(){

  if(automatico){
    
    movimentaAutomatico()
  
  }else{
    if(keyIsDown(83)){ //S
        for(let i = 0; i < xJogadores2.length; i++){
          if(podeMexerJogadorDown(yJogadores2[i])){
            yJogadores2[i]+=10;
        }
      }
    }else if (keyIsDown(87)){ //W
       for(let i = 0; i < xJogadores2.length; i++){
         if(podeMexerJogador(yJogadores2[i])){ 
           yJogadores2[i]-=10;
        }
      }
    }
  }
}


function podeMexerJogador(y){
    return y > 0;
}

function podeMexerJogadorDown(y){
    return y < height - alturaJogador;
}

function movimentaAutomatico(){
  for(let i = 0; i < xJogadores2.length; i++){
        velocidadeyJogador2 = yBolinha - yJogadores2[i] - comprimentoJogador /2 - 30;
        yJogadores2[i] += velocidadeyJogador2;
      }
}

function trocaAutomaticoManual(){
  if(keyIsDown(32)){ //se apertar Espaço troca
    automatico =! automatico;
  }
}
