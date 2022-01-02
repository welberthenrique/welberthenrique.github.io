let colidiu = false;

function verificaColisaoBorda(){
  if(xBolinha + raio > width || xBolinha - raio < 0 ){
    velocidadeXBolinha *=-1;       
  }
  if(yBolinha + raio > height || yBolinha - raio < 0 ){
    velocidadeYBolinha *=-1;    
  }
}

function verificaColisaoJogador1(){
  for(let i = 0; i < xJogadores1.length; i++){
    colidiu = collideRectCircle(xJogadores1[i], yJogadores1[i], comprimentoJogador, alturaJogador, xBolinha, yBolinha, raio);
    
    mudaPosicaoBolinha();
  } 
}

function verificaColisaoJogador2(){
    for(let i = 0; i < xJogadores2.length; i++){
    colidiu = collideRectCircle(xJogadores2[i], yJogadores2[i], comprimentoJogador, alturaJogador, xBolinha, yBolinha, raio);
 
    mudaPosicaoBolinha();
    }
}

function mudaPosicaoBolinha(){
  if(colidiu){
        velocidadeXBolinha *=-1;
  }
}


