const a = 15
const b = 15
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
///////////////////////////////////////////////
const x = 31
const y = 30
const z = 33
let maior = x
    if (y > x) {
        maior = y
    }
    if (z > y) {
        maior = z
    }
    console.log(maior);
////////////////////////////////////////////////
const numero = 0
if (numero > 0) {
    console.log("positivo");
}else if (numero < 0) {
    console.log("negativo");
}else {
    console.log("zero");
}
///////////////////////////////////////////////////////
const angulo1 = 61
const angulo2 = 60
const angulo3 = 60
if (angulo1 + angulo2 + angulo3 === 180) {
    console.log(true);
}else {
    console.log(false);
}
////////////////////////////////////////////////////
let pecaDeXadrez = "DAMA".toLowerCase()
    switch(pecaDeXadrez) {
        case "Cavalo".toLowerCase():
            console.log("L");
            break;
        case "bispo".toLowerCase():
            console.log("diagonais");
            break;
        case "rei".toLowerCase():
            console.log("todas as direções uma casa");
            break;
        case "dama".toLowerCase():
            console.log("todas as direções infinitas casas");
            break;
        case "torre".toLowerCase():
            console.log("linhas retas vertical e horizontal");
            break;
    }
 /////////////////////////////////////////////////////
let notaPorcentagem = 61
    if (notaPorcentagem >= 90 && notaPorcentagem <= 100) {
        notaPorcentagem = "A";
        console.log(notaPorcentagem);

    }
    else if (notaPorcentagem >= 80 && notaPorcentagem < 90) {
        notaPorcentagem = "B";
        console.log(notaPorcentagem);

    }
    else if (notaPorcentagem >= 70 && notaPorcentagem < 80) {
        notaPorcentagem = "C";
        console.log(notaPorcentagem);

    }
    else if (notaPorcentagem >= 60 && notaPorcentagem < 70) {
        notaPorcentagem = "D";
        console.log(notaPorcentagem);

    }
    else if (notaPorcentagem >= 50 && notaPorcentagem < 60) {
        notaPorcentagem = "E";
        console.log(notaPorcentagem);

    }
    else if (notaPorcentagem < 50 && notaPorcentagem > 0) {
        notaPorcentagem = "F";
        console.log(notaPorcentagem);

    } else {
        console.log("Erro crítico: Dados inválidos");
    }
/////////////////////////////////////////////////////////////
const numero1 = 1
const numero2 = 5
const numero3 = 3
    if (numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 == 0) {
        console.log(true);
    }else {
        console.log(false);
    }
/////////////////////////////////////////////////////////
const numero1 = 2
const numero2 = 6
const numero3 = 4
    if (numero1 % 2 != 0 || numero2 % 2 != 0 || numero3 % 2 != 0) {
        console.log(true);
    }else {
        console.log(false);
    }
/////////////////////////////////////////////////////////
let quantidadeDeProdutos = 1000;
const valorCusto = 40 * quantidadeDeProdutos;
const valorVenda = 80 * quantidadeDeProdutos;
let imposto = valorCusto * 0.20;
let valorCustoTotal = valorCusto + imposto;
let lucro = valorVenda - valorCustoTotal;
    if (valorCusto > 0 && valorVenda > 0) {
        console.log(lucro);
    } else {
        console.log("Erro: dados inválidos");
    }
/////////////////////////////////////////////////////
let salarioBruto = 4000.10
let aliquotaINSS 
let aliquotaIR
    if (salarioBruto < 1556.94 && salarioBruto > 0) {
        aliquotaINSS = salarioBruto * 0.08;
    }else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
        aliquotaINSS = salarioBruto * 0.09
    }else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
        aliquotaINSS = salarioBruto * 0.11
    }else if (salarioBruto > 5189.82) {
        aliquotaINSS = 570.88
    }
    
    if (salarioBruto <= 1903.98) {
        aliquotaIR = 0
    }else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
        aliquotaIR = salarioBruto * 0.075 - 142.80;
    }else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
        aliquotaIR = salarioBruto * 0.15 - 354.80
    }else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
        aliquotaIR = salarioBruto * 0.225 - 636.13
    }else {
        aliquotaIR = salarioBruto * 0.275 - 869.36
    }
let salarioBase = salarioBruto - aliquotaINSS - aliquotaIR

console.log(salarioBase);
/////////////////////////////////////////////////////