

var promise = new Promise((resolve,reject)=>{
    if(false){
        resolve("I am good");
    }
    else{
        reject("I am bad");
    }
});


promise.then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
});

console.log("i am after promise");