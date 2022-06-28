// comece a criar a sua função add na linha abaixo
function add (x,y){
    
    return x+y
}

 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply (x,y){
    let mult = 0
    for(let i=0;i<x;i++){
        mult = add(mult,y) 
        
    }
    return mult
}

 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


function power (x,y){
    let pow = 1
    for(let i=0;i<y;i++){
        pow = multiply(pow,x) 
        
    }
    return pow
}

 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial (x){
    let fact = x
    for(let i=1;i<x;i++){
        fact = multiply(fact,i) 
        
    }
    return fact
}

 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');



 //BONUS 
 

// crie a função fibonacci
function fibonacci (x){
   
let f0 = 0
let f1 = 1
let fx = 0
if(x < 1){
    return 0
}else if(x<=2){
    return 1
}else{
    for(i=2;i<=x;i++){
        fx = add(f0,f1)
        f0 = f1
        f1 = fx
    }

}
return fx
}

 console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
