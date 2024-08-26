var pais = "Brasil";

if (pais != "Brasil") {
  console.log('você é estrangeiro');
} else {
  console.log('você é Brasileiro');
}

var idade = 22;
if (idade < 16 ){
  console.log('não votar');
} else if (idade < 18 || idade > 65 ) {
  console.log("voto opcional");
} else {
  console.log("Voto obrigatório");
  
}