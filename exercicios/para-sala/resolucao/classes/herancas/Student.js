/*Em seguida, crie uma classe Student que terá as informações de Person com os atributos adicionais:
- Turma;
- Temas estudados;*/

import { Person } from './Person2'

class Student extends Person {
    constructor(turma, temasEstudados){
        this.turma = turma;
        this.temasEstudados = temasEstudados;

        }
}