// // // // const a = 15
// // // // const b = 15
// // // // console.log(a + b);
// // // // console.log(a - b);
// // // // console.log(a * b);
// // // // console.log(a / b);
// // // // console.log(a % b);
// // // // ///////////////////////////////////////////////
// // // // const x = 31
// // // // const y = 30
// // // // const z = 33
// // // // let maior = x
// // // //     if (y > x) {
// // // //         maior = y
// // // //     }
// // // //     if (z > y) {
// // // //         maior = z
// // // //     }
// // // //     console.log(maior);
// // // // ////////////////////////////////////////////////
// // // // const numero = 0
// // // // if (numero > 0) {
// // // //     console.log("positivo");
// // // // }else if (numero < 0) {
// // // //     console.log("negativo");
// // // // }else {
// // // //     console.log("zero");
// // // // }
// // // // ///////////////////////////////////////////////////////
// // // // const angulo1 = 61
// // // // const angulo2 = 60
// // // // const angulo3 = 60
// // // // if (angulo1 + angulo2 + angulo3 === 180) {
// // // //     console.log(true);
// // // // }else {
// // // //     console.log(false);
// // // // }
// // // // ////////////////////////////////////////////////////
// // // // let pecaDeXadrez = "DAMA".toLowerCase()
// // // //     switch(pecaDeXadrez) {
// // // //         case "Cavalo".toLowerCase():
// // // //             console.log("L");
// // // //             break;
// // // //         case "bispo".toLowerCase():
// // // //             console.log("diagonais");
// // // //             break;
// // // //         case "rei".toLowerCase():
// // // //             console.log("todas as direções uma casa");
// // // //             break;
// // // //         case "dama".toLowerCase():
// // // //             console.log("todas as direções infinitas casas");
// // // //             break;
// // // //         case "torre".toLowerCase():
// // // //             console.log("linhas retas vertical e horizontal");
// // // //             break;
// // // //     }
            // function xadrez(peca) {
                
            //     if (peca === 'Cavalo') {
            //         console.log("Movimento em L");
            //     }
            //     else if (peca === 'Bispo') {
            //        console.log('Movimento nas diagonais');
            //     }
            //     else if (peca === 'Dama') {
            //         console.log('Movimento em todas as direções');
            //     }
            //     else if (peca === 'Rei') {
            //         console.log('Todas as direções, mas apenas uma casa');
            //     }
            //     else if (peca === 'Torre') {
            //         console.log('Linhas retas vertical e horizontal.');
            //     }
            //     else {
            //         console.log('peça desconhecida')
            //     }
            // }
            //  xadrez('Bispo')
// // // //  /////////////////////////////////////////////////////
// // // // let notaPorcentagem = 61
// // // //     if (notaPorcentagem >= 90 && notaPorcentagem <= 100) {
// // // //         notaPorcentagem = "A";
// // // //         console.log(notaPorcentagem);

// // // //     }
// // // //     else if (notaPorcentagem >= 80 && notaPorcentagem < 90) {
// // // //         notaPorcentagem = "B";
// // // //         console.log(notaPorcentagem);

// // // //     }
// // // //     else if (notaPorcentagem >= 70 && notaPorcentagem < 80) {
// // // //         notaPorcentagem = "C";
// // // //         console.log(notaPorcentagem);

// // // //     }
// // // //     else if (notaPorcentagem >= 60 && notaPorcentagem < 70) {
// // // //         notaPorcentagem = "D";
// // // //         console.log(notaPorcentagem);

// // // //     }
// // // //     else if (notaPorcentagem >= 50 && notaPorcentagem < 60) {
// // // //         notaPorcentagem = "E";
// // // //         console.log(notaPorcentagem);

// // // //     }
// // // //     else if (notaPorcentagem < 50 && notaPorcentagem > 0) {
// // // //         notaPorcentagem = "F";
// // // //         console.log(notaPorcentagem);

// // // //     } else {
// // // //         console.log("Erro crítico: Dados inválidos");
// // // //     }
// // // // /////////////////////////////////////////////////////////////
// // // // const numero1 = 1
// // // // const numero2 = 5
// // // // const numero3 = 3
// // // //     if (numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 == 0) {
// // // //         console.log(true);
// // // //     }else {
// // // //         console.log(false);
// // // //     }
// // // // /////////////////////////////////////////////////////////
// // // // const numero1 = 2
// // // // const numero2 = 6
// // // // const numero3 = 4
// // // //     if (numero1 % 2 != 0 || numero2 % 2 != 0 || numero3 % 2 != 0) {
// // // //         console.log(true);
// // // //     }else {
// // // //         console.log(false);
// // // //     }
// // // // /////////////////////////////////////////////////////////
// // // // let quantidadeDeProdutos = 1000;
// // // // const valorCusto = 40 * quantidadeDeProdutos;
// // // // const valorVenda = 80 * quantidadeDeProdutos;
// // // // let imposto = valorCusto * 0.20;
// // // // let valorCustoTotal = valorCusto + imposto;
// // // // let lucro = valorVenda - valorCustoTotal;
// // // //     if (valorCusto > 0 && valorVenda > 0) {
// // // //         console.log(lucro);
// // // //     } else {
// // // //         console.log("Erro: dados inválidos");
// // // //     }
// // // // /////////////////////////////////////////////////////
// // // // let salarioBruto = 4000.10
// // // // let aliquotaINSS 
// // // // let aliquotaIR
// // // //     if (salarioBruto < 1556.94 && salarioBruto > 0) {
// // // //         aliquotaINSS = salarioBruto * 0.08;
// // // //     }else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
// // // //         aliquotaINSS = salarioBruto * 0.09
// // // //     }else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
// // // //         aliquotaINSS = salarioBruto * 0.11
// // // //     }else if (salarioBruto > 5189.82) {
// // // //         aliquotaINSS = 570.88
// // // //     }
    
// // // //     if (salarioBruto <= 1903.98) {
// // // //         aliquotaIR = 0
// // // //     }else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
// // // //         aliquotaIR = salarioBruto * 0.075 - 142.80;
// // // //     }else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
// // // //         aliquotaIR = salarioBruto * 0.15 - 354.80
// // // //     }else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
// // // //         aliquotaIR = salarioBruto * 0.225 - 636.13
// // // //     }else {
// // // //         aliquotaIR = salarioBruto * 0.275 - 869.36
// // // //     }
// // // // let salarioBase = salarioBruto - aliquotaINSS - aliquotaIR

// // // // console.log(salarioBase);
// // // // /////////////////////////////////////////////////////
// // // // let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// // // // let menuServices = menu[1];

// // // // console.log(menuServices);
// // // // ////////////////////////////////////////////////////////
// // // // let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// // // // let indexOfPortfolio = menu.indexOf("Portfólio");

// // // // console.log(indexOfPortfolio);
// // // // //////////////////////////////////////////////////////
// // // // let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// // // // menu.push("Contato")
// // // // console.log(menu);
// // // ///////////////////////////////
// // // let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
// // //     for(let index = 0; index < groceryList.length; index += 1) {
// // //         console.log(groceryList[index]);
// // //     }
// // /////////////////////
// // let palavra = "Jesus";
// // for (let letra of palavra) {
// //     console.log(letra);
// // }
// //////////////////////////////
// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
//     for(let name of names) {
//         console.log(name);
//     }
/////////////////////////////////////////////////////////////
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = numbers[0] + numbers[1] + numbers[2] + numbers[3] +  numbers[4] + numbers[6]  + numbers[8] + numbers[9] 
// let mediaAritmetica = soma / numbers.length
//     if (mediaAritmetica > 20) {
//         console.log("valor maior do que 20");
//     }else {
//         console.log("valor menor ou igual a 20");
//     }
// let maiorNumero = numbers[0]
//     for (let index = 0; index < numbers.length; index += 1) {
       
//         if (numbers[index] > maiorNumero) {
//             maiorNumero = numbers[index]
            
//         }
        
//     }console.log(maiorNumero);
// let menorNumero = numbers[0]
//     for (let index = 0; index < numbers.length; index += 1) {
       
//         if (numbers[index] < menorNumero) {
//             menorNumero = numbers[index]
            
//         }
        
//     }console.log(menorNumero);
// let numerosImpares = 0
// let maiorNumero = numbers[0]
//     for (let index = 0; index < numbers.length; index += 1) {
//         if (numbers[index] % 2 !== 0) {
//             numerosImpares++
            
//         } if (numerosImpares == 0) {
//             console.log("Nenhum valor ímpar encontrado");
//         }
//     }console.log(numerosImpares);
    // for (let indice = 1; indice <= 25; indice++) {
    //         let array = []
    //         array.push(indice / 2);
        
    //     console.log(array);
        
    // }
////////////// Crie um algoritmo que retorne o fatorial de 10:
    // let fator = 10
    //     for (let index = 9; index > 0; index -= 1) {
    //         let fatorial = fator * index
    //         console.log(fatorial);
            
    //     }
////////////////// Desenvolva um algoritmo que é capaz de inverter uma palavra
// let word = "Luis Inácio Lula da Silva"
// let wordinvertida = ""

//     for (let index = word.length - 1; index >= 0; index -= 1) {
//         wordinvertida += word[index]
        
        
// }       
// console.log(wordinvertida); 
////////////Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = array[0]
// let menorPalavra = array[0]
//     // for (let index = 1; index < array.length; index++) {
//     //     if (array[index].length > maiorPalavra.length) {
//     //         maiorPalavra = array[index]
//     //     }
        
//     // }console.log(maiorPalavra);
//     for (let index = 1; index < array.length; index++) {
//         if (array[index].length < menorPalavra.length) {
//             menorPalavra = array[index]
//         }
        
//     }console.log(menorPalavra);
////////////////Escreva um algoritmo que retorne o maior número primo entre 0 e 50.

////////////////
    // let player = {
    //     name: "Marta",
    //     lastName: " Silva",
    //     age: 34,
    //     medals: {
    //         golden: 2,
    //         silver: 3,
    //     },
    //     bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
    // } 

    // console.log("A jogadora " + player.name + player.lastName + " tem " + player.age + " anos de idade.");
    // console.log("A jogadora " + player.name + player.lastName + " foi eleita a melhor do mundo por " + 
    // player.bestInTheWorld.length + " vezes.");
    // console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + 
    // " medalhas de prata.");
/// Utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };
//   for (let index in names) {
//       console.log("Olá " + names[index]);
//   }
/////////// Utilize for/in e imprima um console.log com as chaves e valores desse objeto.
// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };
//   for (let index in car) {
//       console.log(index + ":", car[index]);
//   }
//////////////////////////  Imprima no console uma mensagem de boas-vindas para a personagem 
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
//   console.log("Bem-vinda, ", info.personagem);
//  Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
// info.recorrente = "Sim"
// console.log(info.recorrente); 
///////////////////////////// Faça um for/in que mostre todas as chaves do objeto. 
// for (let key in info) {
//     console.log(key);
// }
////////////////////////////// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
// for (let values in info) {
//     console.log(info[values]);
// }
// info.personagem = "Margarida e Tio Patinhas"
// info.origem = "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178"
// info.nota = "Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas"
// info.recorrente = "Ambos recorrentes"
// for (let values in info) {
//     console.log(info[values]);
// }
/// Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };
//   console.log("O livro favorito de", leitor.nome, leitor.sobrenome, "se chama '" + leitor.livrosFavoritos[0].titulo + "'.");
//////////////////// Adicione um novo livro favorito na chave livrosFavoritos, que é um array.
// leitor.livrosFavoritos = {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   }
////////////// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
    // function verificaPalindromo(palavra) {

    //     let palavraInversa = palavra.split('').reverse().join('');
    //     return palavra === palavraInversa


    // } console.log(verificaPalindromo('arara'));
/////////////////// ///Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// let array = [2, 4, 6, 7, 10, 0, -3]
//     function indiceMaiorValor(arr) {

//         const max = Math.max.apply(null, array);

//         const indexOfArray = array.indexOf(max);
//         return indexOfArray
//     }
// console.log(indiceMaiorValor(array));
//////////////////// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
    // function indiceMenorValor() {
    //     let array = [2, 4, 6, 7, 10, 0, -3]
    //     const min = Math.min.apply(null, array);

    //     const indexOfArray = array.indexOf(min);
    //     return indexOfArray
    // }
    // console.log(indiceMenorValor());
///////////////// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// const nomes = ['José', 'Lucas', 'Palhocinha', 'Fernanda', 'Cairo', 'Joana']
//     function maiorPalavra(palavras) {
//         let maiorPalavra = palavras[0];
//         for (let indice in palavras) {
//         if (maiorPalavra.length < palavras[indice].length) {
//             maiorPalavra = palavras[indice];
//         }
//         }
//         return maiorPalavra;
//     }
  
//   console.log(maiorPalavra(nomes)); 

//////////// function fatorial
    // function fatorial(n) {
    //     let fat = 1
    //     for (let c = n; c > 1; c -= 1) {
    //         fat *= c
            
    //     }
    //     return fat
    // }
    // console.log(fatorial(5));
 /////////////////// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//  let array = [2, 3, 2, 5, 8, 2, 3]
//  function maisRepetido(numeros) {
//     let contRepetido = 0;
//     let contNumero = 0;
//     let indexNumeroRepetido = 0;
//     for (let index in numeros) {
//       let verificaNumero = numeros[index];
//       for (let index2 in numeros) {
//         if (verificaNumero === numeros[index2]) {
//           contNumero += 1;
//         }
//       }
//       if (contNumero > contRepetido) {
//         contRepetido = contNumero;
//         indexNumeroRepetido = index;
//       }
//       contNumero = 0;
//     }
//     return numeros[indexNumeroRepetido];
//   }
//   console.log(maisRepetido(array));
 /////////////////////////// programa que receba três constantes com os valores dos três ângulos internos de um triângulo.
//  function triangleAnglesValidate(angleA, angleB, angleC) {
//     let sumOfAngles = angleA + angleB + angleC;
//     let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;
  
//     if (allAnglesArePositives) {
//       if (sumOfAngles === 180) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return 'Erro: ângulo inválido';
//     }
//   }
//   console.log(triangleAnglesValidate(60,60,50));
///////// Crie uma função que receba um número natural N e retorne o somatório de todos os números de 1 até N.
//     function somadorMaluco(numeroQualquer) {
//     let totalDaSoma = 0
//     for (let index = 1; index <= numeroQualquer; index++) {
//         totalDaSoma += index
        
//     }
//     return totalDaSoma
// }
// console.log(somadorMaluco(5));
//////////// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. 
// function verificaFimPalavra(palavra, fimPalavra) {
//     palavra = palavra.split('');
//     fimPalavra = fimPalavra.split('');
//     let controle = true;
//     for (let index = 0; index < fimPalavra.length; index += 1) {
//       if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
//         controle = false;
//       }
//     }
//     return controle;
//   }
//   console.log(verificaFimPalavra('banana', 'sana'));
let a = "Serei a melhor pessoa dev";
let b = "Esse é meu jeito dev de ser!";
let num = 2;
let strings = [a, b];
console.log((typeof strings.length) == (typeof num));
