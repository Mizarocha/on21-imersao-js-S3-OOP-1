//como criar uma classificação da nossa entidade para modelar os nossos astributos.

/*class User {

} */

//como atribuirmos valores a nossa classe?

class User {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;

    }

getName(){
    return `seja bem vindo, ${this.name}`
   }


 getNameLength(){
    return `Your name's length = ${this.name.length} `
  }
}



const user1 = new User("Artemiza", "izarocha@gmail.cmom", "senha13#");
const user2 = new User("Artemiza", "izarocha@gmail.cmom", "senha15#");
const user3 = new User("Artemiza", "izarocha@gmail.cmom", "senha10#");


  console.log(user1.getName())

console.log(user1.getNameLength())