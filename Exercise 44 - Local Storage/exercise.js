const user = {
  id: 1,
  name: "John",
  age: 25,
};


function retrieveUserFromLocalStorage() {
  const userJSON = localStorage.getItem('user');
  if (userJSON) {
    const user = JSON.parse(userJSON);
    console.log(`First Name: ${user.firstName}`);
    console.log(`Last Name: ${user.lastName}`);
    console.log(`Age: ${user.age}`);
  } else {
    console.log('No user data found in localStorage');
  }
}

retrieveUserFromLocalStorage();