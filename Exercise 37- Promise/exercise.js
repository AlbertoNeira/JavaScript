const number = 15;


const Promise1= (num)=>{
    
    return new Promise ((resolve,reject) => {
        if (num>=10){
            resolve("num is greater or equal to 10")
        }
        else{
            reject(
                "num is not equal or greater than 10"
            )
        }
    })
}

Promise1(number)
.then((result)=>{
    console.log(result);
})
.catch((error) =>{
 
    console.error(error)
    
}
)
