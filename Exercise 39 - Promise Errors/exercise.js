
const isLogged = true;

const promise1 = (isLogged) => {
    return new Promise((resolve, reject) => {
      if (isLogged) {
        resolve(Math.random());
      } else {
        reject(new Error("User not logged in"));
      }
    });
  };
  
  const promise2 = (input) => {
    return new Promise((resolve, reject) => {
        console.log(input)
      if (input > 0.5) {
        resolve({ name: "John", age: 24 });
      } else {
        reject(new Error("Input is too small"));
      }
    });
  };
  
  
  promise1(true)
  .then((result) => {
    return promise2(result);
  })
  .then((finalResult) => {
    console.log(finalResult);
  })
  .catch((error) => {
    console.log(error.message); 
  })
  .finally(() => {
    console.log("Promise chain completed.");
  });