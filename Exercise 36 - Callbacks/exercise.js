
const repeatHello = (callback) => {
    const repeat= setInterval(callback, 1000)
    setTimeout(() => clearInterval(repeat), 5000);
    }

  
 
  const sayHello = () => {
    console.log("Hello");
  };
  
 
  repeatHello(sayHello);