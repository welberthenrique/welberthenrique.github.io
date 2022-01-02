function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(color(0,128,0));
  mostraBolinha();
  trocaAutomaticoManual();
  fill(color(30,144,255));
  mostraJogador1();
  fill(color(255,0,0));
  mostraJogador2();
  movimentaBolinha();
  movimentaJogador1();
  movimentaJogador2();
  verificaColisaoBorda();
  verificaColisaoJogador1();
  verificaColisaoJogador2()
  incluiPlacar();
  mostraBaliza();
  marcaPontoJogador2();
  marcaPontoJogador1();
  desenhaCampo();
}










