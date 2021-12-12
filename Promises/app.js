console.log("Working with promises");

function fun1(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            // const error = true;
            const error = false;
            if(!error){
                console.log("Promise full filled");
                resolve();
            }
            else{
                
                reject("Promise rejected");
            }
        }, 2000);

        const error = true;



    })
}

fun1().then(function(){
    console.log("Congrats!!!");
}).catch(function(e){
    console.log(e + " better luck next time");
})

   

