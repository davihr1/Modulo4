// Descobrir qual a posicão da palavara real na frase abaixo
// contando do zero e espaços
var jogo = "Barcelona vs Real Madri";
var posicao = jogo.indexOf("Real");
console.log(posicao);

// onde começa e termina (mostrar na tela onde que vai começar e onde termina)
var cortado = jogo.slice(0,5);
var começandoNoMeio = jogo.slice(13)
console.log(cortado, começandoNoMeio);

// verificar se uma palavra existe na frase
var val = jogo.includes("Real");
console.log(val);

// `.concat()` é utilizado para combinar dois ou mais arrays, criando um novo array resultante da concatenação dos arrays originais.
//  Ou seja, ele não altera os arrays originais, mas sim cria um novo array contendo todos os elementos dos arrays concatenados.
var str1 = 'Hello';
var str2 = ' Turma';
var str3 = str1.concat(str2);
console.log(str3);

// `.trim()` é utilizado para remover os espaços em branco (espaços, tabulações e quebras de linha) do início e do final de uma string. 
var frase = "  Grandes oportunidades estão na nossa frente as vezes agente não vê   ...";
console.log(frase.trim());

var num = '1,2,3,4,5,6,7,8';
var arr = num.split(",");
console.log(arr);

var frase = "Ola mundo";
if (frase.startsWith('Ola')) {
  let sub = frase.substring(4);
  let novaString = sub.replace('mundo', 'pessoal');
  let novaStringMaiuscula = novaString.toUpperCase();
  console.log(novaStringMaiuscula);
  
}
