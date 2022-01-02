function desenhaCampo(){

  desenhaGrandeArea();
  desenhaCentroCampo();
  anguloEscanteio();
  
  rect(27, 15, 546, 370); //retangulo quadra completa
  fill(255);

}

function desenhaGrandeArea(){
  noFill();
  rect(27, 90, 85, 221); //grande area time azul
  rect(488, 90, 85, 221); //grande area time vermelho
  rect(27, 151, 28, 99); //area de penalti time azul
  rect(544, 151, 28, 99); //area de penalti time vermelho
  rect(574, 181, 5, 40); //retangulo atras grande area time vermelho
  rect(21, 181, 5, 40); //retangulo atras grande area time azul

  //meio circulo grande area
  arc(113, 200, 40, 80, 3*PI/2, PI/2); //time azul
  arc(488, 200, 40, 80, PI/2, 3*PI/2);//time vermelho

  circle(515,200,1); //marca penalti time vermelho
  circle(83,200,1); //marca penalti time vermelho
  
}

function desenhaCentroCampo(){
  rect(width/2-1, 15, 1, 370); //linha meio de campo
  circle(width/2, height/2, 97); //circulo centro
  fill(255);
  circle(width/2, height/2, 5); //circulo meio de campo
  noFill();
}

function anguloEscanteio(){
  
  arc(27, 15, 10, 10, 0, HALF_PI); //superior esquerdo
  arc(573, 15, 10, 10, PI/2, PI); //superior direito
  arc(28, 384, 10, 10, 3*PI/2, 2*PI); //inferior esquerdo
  arc(573, 384, 10, 10, PI, 3*PI/2); //inferior direito
}

