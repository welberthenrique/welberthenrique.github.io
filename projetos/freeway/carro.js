//Variaveis do carro1
let yCarros = [40, 98, 150, 212, 265, 310];
let xCarros = [600,600,600, 600, 600, 600];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.2, 2];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro,alturaCarro);
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }  
}

function voltaPosicaoInicial(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }  
  }
}

function passouTodaATela(xCarro){
  return xCarro < -45;
}





