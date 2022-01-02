/*
 - Codigo do curso de lógica: 04/09/2021
 - Programador: Welbert Araujo
*/
var pacientes = [];

var botao = document.getElementById("calcular");
botao.addEventListener('click', function(){
    var paciente = lerPaciente();
    pacientes.push(paciente);
    mostraPaciente(paciente);
});

var botaoRelatorio = document.getElementById("relatorio");
botaoRelatorio.addEventListener('click', function(){
                      geraRelatorio(pacientes);
});



//objeto paciente dados relacionados a mesma entidade
// var paciente = {
//     nome = 'Renato Oliveira',
//     peso = 76.00,
//     altura = 1.78
// };

// mostraPaciente(paciente);