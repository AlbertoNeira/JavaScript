const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

// const person2 = person1; this way is wrong because declaring this way is calling the same slot memory the same, so when modifying one of the variables the same slot will change for both

// Modify the property `firstName` of the `person2` in "Simon".




const copyObject = (person) =>{
  return {firstName:person.firstName , lastName:person.lastName , age:person.age};
}

const person2 = copyObject(person1);

console.log(person1);
console.log(person2);


person2.firstName = "Simon";


console.log(person1);
console.log(person2);
