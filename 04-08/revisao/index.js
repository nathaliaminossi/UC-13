// variaveis
var nome = "nat";
var idade = 17;
var estudante = true;
//arrays
var listaDeCompras = ["batata", "feijao", "Carne"];
var notas = [10, 9, 8];
// objetos
var aluno = {
    nome: "nat",
    idade: 17,
    disciplinas: ["UC1", "UC2", "UC3"]
};
function mensagem() {
    console.log("oi");
}
// retorno string
function frase(nome) {
    return 'Ola ${nome}, como vai vc';
}
//parametros opcionais
function fraseOpcional(nome) {
    console.log("ola" + nome || ("mundo"));
}
fraseOpcional();
fraseOpcional("natiu");
function calculaValor(valor, desconto) {
    if (desconto === void 0) { desconto = 5; }
    console.log(valor - desconto);
}
calculaValor(100);
calculaValor(100, 10);
