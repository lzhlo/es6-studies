import { autobind } from 'core-decorators';

class Person {
    @autobind
    getPersion() {
        return this;
    }
}

let person = new Person();
let getPersion = person.getPersion();
console.log(getPersion() === person);






