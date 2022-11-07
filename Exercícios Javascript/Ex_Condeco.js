//Exercicios de Computação Gráfica 14/09/2021

/////////////////////////////////////////////
/*
 _____                   _      _         _ 
| ____|_  _____ _ __ ___(_) ___(_) ___   / |
|  _| \ \/ / _ \ '__/ __| |/ __| |/ _ \  | |
| |___ >  <  __/ | | (__| | (__| | (_) | | |
|_____/_/\_\___|_|  \___|_|\___|_|\___/  |_|
                                            
*/
/////////////////////////////////////////////

//Ex 1 a)
function repete( x , n){
    let arr = []
    for(let i = 0; i < n; i++){
        arr.push(x)
    }
    return arr
}

//Ex 1 b)
function aleatorios(n){
    let arr = []
    for(let i = 0; i < n; i++){
        arr.push(Math.random())
    }
    return arr
}

//Ex 1 b) mas com números inteiros
function aleatorios2(n){
    let arr = []
    for(let i = 0; i < n; i++){
        arr.push(Math.round(Math.random() * (100 /* max */ - 0 /* min */) + 0 /* min */))
    }
    return arr
}

//Ex 1 c)
function intervalo(a, b){
    let arr = []
    for(let i = Math.round(a); i <= b ; i++){ //Assumindo que é um intervalo com parenteses fechados senão tenho de fazer de outra forma
        arr.push(i);
    }
    return arr
}

//Ex 1 d)

function RandomLimitado(max, min){              // Função para me ajudar a ter o número random num intervalo (como eu não limito o número de casas decimais isto vai dar números enormes)
    return Math.random() * (max - min) + min;   // Se quiser números razoaveis basta meter isto dentro de um Math.round() 
}                                               // Podia simplesmente ter metido a fórmula logo na função, but this is the way 

function linspace(a , b , n){
    let arr = []
    for(let i = 0; i < n ; i++){
        arr.push(RandomLimitado(b, a))
    }
    return arr
}

////////////////////////////////////////////////
/*
 _____                   _      _         ____  
| ____|_  _____ _ __ ___(_) ___(_) ___   |___ \ 
|  _| \ \/ / _ \ '__/ __| |/ __| |/ _ \    __) |
| |___ >  <  __/ | | (__| | (__| | (_) |  / __/ 
|_____/_/\_\___|_|  \___|_|\___|_|\___/  |_____|

*/
////////////////////////////////////////////////

//Ex 2 a)
function pares(x){
    let arr = []
    x.forEach(element => {
        if((element % 2 ) == 0){
            arr.push(element)
        }
    })
    return arr;
}

//Ex 2 b)
function positivos(x){
    let arr = []
    x.forEach(element => {
        if(element > 0){
            arr.push(element)
        }
    })
    return arr;
}


/*

 _____         _            
|_   _|__  ___| |_ ___  ___ 
  | |/ _ \/ __| __/ _ \/ __|
  | |  __/\__ \ ||  __/\__ \
  |_|\___||___/\__\___||___/
                            

*/
// Testes
//ex1 a)
console.log("\nEx1 a): " + repete(1, 4))

//ex1 b)
console.log("\nEx1 b): " + aleatorios(5))
console.log("\nEx1 b): " + aleatorios2(5))

//ex1 c)
console.log("\nEx1 c): " + intervalo(5.2 , 10))

//ex1 d)
console.log("\nEx1 d): " + linspace(0 , 1 , 3))


//ex2 a)
console.log("\nEx2 a): " + pares([1, 2, 4, 5, 2, 3]))

//ex2 b)
console.log("\nEx2 b): " + positivos([1, -2.5, 0.4, 0.0, -1.5, 2, 2.3]))

