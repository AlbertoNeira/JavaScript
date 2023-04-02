const repeatHello = (callback) => {
    setInterval(callback, 1000);
  };
  
 
  const sayHello = () => {
    console.log("Hello");
  };
  
 
  repeatHello(sayHello);

  //arrow function is recommended to use in this situation because is much easier to read