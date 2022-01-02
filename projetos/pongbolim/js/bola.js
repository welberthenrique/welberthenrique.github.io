//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 195;
let diametro = 15;
let raio = diametro/2;
let posicaoYBolinha = yBolinha - 90;

//Velocidade da bolinha
let velocidadeXBolinha = 4;
let velocidadeYBolinha = 4;

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function bugBolinha(){
  if(yBolinha > 400 || yBolinha < 5){
    velocidadeYBolinha *=-1;
  }
  if(xBolinha > 600 || yBolinha < 0){
    velocidadeYBolinha *=-1;
  }
}





