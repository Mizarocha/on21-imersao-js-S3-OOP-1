/*Excreva uma classe chamada Employee,
que modela um funcionário com os atributos id, name e salary.
O método raiseSalary() aumenta o salário baseado numa dada porcentagem.
Escreva a classe Employee.

- Escrever a class
- Criar o metódo raiseSalary()

 aumento=salario * 12
        salario=(salario+aumento)
*/

class Employee {
    constructor(id, name, salary) {
      this.id = id;
      this.name = name;
      this.salary = salary;
    }
  
    raiseSalary = (percent) =>
      `O funcionario ${this.name} de id ${
        this.id
      }, receberá aumento de ${percent} % totalizando um salario no valor de ${
        (this.salary * percent) / 100 + this.salary
      }`;
  }
  
  const employee1 = new Employee(123, "Artemiza", 100);
  
  console.log(employee1.raiseSalary(10));
  