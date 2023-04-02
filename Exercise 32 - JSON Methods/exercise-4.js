const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};
const filtered= {id:person.id,age:person.age};
const json = JSON.stringify(filtered);

console.log(json); // Should return: { id: 1, age: 25 }

///OR

const json2 = JSON.stringify(person);

const person3= JSON.parse(json2)

const filtered2 = { id: person3.id, age: person3.age };


console.log(filtered2);