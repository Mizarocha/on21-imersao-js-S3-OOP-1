/*
Em seguida, crie em outro arquivo chamado Conta, que modela uma conta bancária de um Cliente com os 
seguintes atributos:

- saldo;
- cliente;
- agência;

Crie os seguintes metódos com os seus requisitos: 

- sacar() -> quando o cliente saca o dinheiro, ele terá que pagar uma taxa de 1, 5 sobre o valor sacado;
- depositar () -> o cliente poderá sacar a quantia que quiser;

*/

const Cliente = require('./cliente')

class Conta extends Cliente {
  constructor(nome, cpf, email, senha, saldo, agencia) {
    super(nome, cpf, email, senha)
    this.saldo = saldo
    this.agencia = agencia
  }

  sacar(valorSaque) {
    const taxa = (valorSaque * 1.5)/100
    return this.saldo -= valorSaque + taxa
  }

     depositar(valorDeposito) { 
    return this.saldo += valorDeposito
  }
}

const novaConta = new Conta('Artemiza', '1234567890', 't2022@mail.com', '58dfg', 450, 27)

console.log(novaConta)
console.log(novaConta.getNome())
console.log(novaConta.sacar(200))
console.log(novaConta.depositar(20))
