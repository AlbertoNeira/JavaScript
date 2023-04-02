function printAsyncName(setInterval,string) {


    setTimeout(() => {
        console.log(string)
    }, 2000);

}
setTimeout(() => {
    console.log("Hello")
 }, 1000);


printAsyncName(setInterval,"Pedro")
