/*Crie uma classe Person com os atributos:
- Nome;
- Endereço;
- Data de Nascimento;*/

class Person {
    constructor(nome, endereço, dataDeNascimento){
        this.nome = nome;
        this.endereço = endereço;
        this.dataDeNascimento = dataDeNascimento;
    }

    
getName(){
    return this.nome
}

getEndereço(){
    return this.endereço
}
}

const loja = new Person ("Miza", "Rua frei Paulo", "10/02/89")

console.log(loja)
console.log(loja.getName())
console.log(loja.getEndereço())