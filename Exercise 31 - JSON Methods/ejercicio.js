const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};
const jsonPerson1= JSON.stringify(person1);
const person2 = JSON.parse(jsonPerson1);
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);