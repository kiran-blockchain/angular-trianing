function parent(inputData){

    return function child(){
        return inputData;
    }
}
let result = parent(100)
console.log(result())


function multiply (x,y){
    return x*y
}
let mul = (x,y)=>x*y;
let mul2 = (x,y)=>{
    return x*y;
}
mul(4,5);