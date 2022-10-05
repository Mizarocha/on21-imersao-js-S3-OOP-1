/*Escreva uma classe chamada Cliente com os seguintes atributos:

- nome;
- cpf;
- email;
- senha;

A classe Cliente deverá ter um método para retornar apenas o nome do cliente;

Em seguida, crie em outro arquivo chamado Conta, que modela uma conta bancária de um Cliente com os 
seguintes atributos:

- saldo;
- cliente;
- agência;

Crie os seguintes metódos com os seus requisitos: 

- sacar() -> quando o cliente saca o dinheiro, ele terá que pagar uma taxa de 1, 5 sobre o valor sacado;
- depositar () -> o cliente poderá sacar a quantia que quiser;

*/

class Cliente {
    constructor(nome, cpf, email, senha) {
      this.nome = nome
      this.cpf = cpf
      this.email = email
      this.senha = senha
    }
  
    getNome() {
      return this.nome
    }
  }
  
  module.exports = Cliente
  