class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age=age;
  }


  getfirstName(){
    return this.firstName;
  }

  setfirstName(firstName){
    this.firstName=firstName
  }

  getlastName(){
    return this.lastName;
  }

  setlastName(lastName){
    this.lastName=lastName
  }

  getage(){
    return this.age;
  }

  setage(age){
    this.age = age;
  }
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);