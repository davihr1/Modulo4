const pessoa = {
  nome: "Lucas",
  sobrenome: "Silva",
}

console.log(pessoa['sobrenome']);


const funcionarios = new Object();
funcionarios.nome = "Davi";
funcionarios.sobrenome = "Favaro";
console.log(funcionarios.nome);


function criarPessoa(nome, sobrenome) {
  return {nome, sobrenome, get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  }};
}

const p1 = criarPessoa("Arthur", "Favaro");
const p2 = criarPessoa("Fernanda", "Favaro");
console.log(p1);
console.log(p1.nome);
console.log(p2);
console.log(p2.nomeCompleto);
