class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
  }

  trabalhar() {
    console.log('Estou trabalhando.');
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    console.log('Estou gerenciando o departamento de ' + this.departamento);
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    console.log(`Estou programando em ${this.linguagem}.`);
  }
}

// Criando instâncias
const gerente = new Gerente('João', 35, 'Gerente', 'Marketing');
const desenvolvedor = new Desenvolvedor('Maria', 30, 'Desenvolvedora', 'JavaScript');

// Chamando os métodos
gerente.seApresentar();
gerente.gerenciar();
desenvolvedor.seApresentar();
desenvolvedor.programar();