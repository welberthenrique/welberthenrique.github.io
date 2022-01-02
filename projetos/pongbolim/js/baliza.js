//Variaveis do Baliza 
let xBalizas = [2, 597];
let yBalizas = [150, 150];
let alturaBaliza = 110;
let comprimentoBaliza = 2;

function mostraBaliza(){
  for(let i = 0; i < xBalizas.length; i++){
    rect(xBalizas[i], yBalizas[i], comprimentoBaliza, alturaBaliza);
  }
}
