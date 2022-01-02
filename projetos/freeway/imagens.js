//Variaveis das imagens
let imagemDaEstrada;
let ator;
let carro1;
let carro2;
let carro3;

//sons do jogo
let colidiu;
let pontos;
let trilha;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  ator = loadImage("imagens/ator-1.png");
  carro1 = loadImage("imagens/carro-1.png");
  carro2 = loadImage("imagens/carro-2.png");
  carro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [carro1, carro2, carro3, carro1, carro2, carro3];
  
  colidiu = loadSound("sons/colidiu.mp3");
  pontos = loadSound("sons/pontos.wav");
  trilha = loadSound("sons/trilha.mp3");
}