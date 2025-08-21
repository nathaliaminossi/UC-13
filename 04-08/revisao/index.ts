import { Pessoa } from "./pessoa"

// variaveis
let nome:string = "nat"
let idade:number = 17
let estudante:boolean = true

//arrays
let listaDeCompras:string[] = ["batata", "feijao", "Carne"]
let notas:Array<number> = [10, 9, 8]

// objetos
let aluno: {nome:string, idade:number, disciplinas:string[]} = {
    nome:"nat",
    idade: 17,
    disciplinas: ["UC1", "UC2", "UC3"]
}

function mensagem():void {
    console.log("oi")
}
// retorno string
function frase(nome:string):string {
    return 'Ola ${nome}, como vai vc'
}

//parametros opcionais
function fraseOpcional(nome?: string):void {
    console.log("ola" + ( nome || "mundo") )
}
fraseOpcional()
fraseOpcional("natiu")


function calculaValor(valor:number, desconto:number = 5):void {
    console.log(valor - desconto)
}

calculaValor(100)
calculaValor(100, 10)

const fulano:Pessoa = new Pessoa("nat minossi", 17)
console.log(
    fulano.getAge()
)

