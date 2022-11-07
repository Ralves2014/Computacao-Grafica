//Ex 4 a)

function inverte(x){
    return x.reverse()
}

//Ex 4 b) i)
function cadeia(x, y){
    return x.concat(y)
}

//Ex 4 b) ii)
function cabeca(n , x){
    return x.slice(0, n)   
}

//Ex 4 b) iii)
function cauda(n , x){
    x = inverte(x)
    return inverte(cabeca(n , x))
}

//Ex 4 c)
function somar(x , y){
    if(x.length != y.length) return []

    for(let i = 0; i < x.length; i++){
        x[i] += y[i]
    }
    return x
}

//Ex 4 d)
function emparelhar(x,y){
    let arr = new Array()
    if(x.length == y.length){
        x.forEach((element , index) => {
        arr.push({x: element , y: y[index]})
    }); 
    }
    return arr
}

//Ex4 a)
console.log("\nEx4 a): " + inverte([1,2,3]))

//Ex4 b) i)
console.log("\nEx4 b) i): " + cadeia([1, 2.1, 4], [5, -2, 3]))

//Ex4 b) ii)
console.log("\nEx4 b) ii): " + cabeca(2, [1, 2 , 3 , 4] ))

//Ex 4 b) iii)
console.log("\nEx4 b) iii): " + cauda(2, [1, 2 , 3 , 4] ))

let x4 = [1 , 2 , 3 , 4 , 5 , 6]
let n4 = 3
console.log("\nEx4 b) -> [1,2,3,4,5,6] === [" + cadeia(cabeca(n4, x4), cauda(n4, x4)) + "]")

//Ex4 c)
console.log("\nEx4 c): " + somar([1, 2.1, 4], [5, -2, 3]))
console.log("\nEx4 c): " + somar([1, 2], [3]))

//Ex4 d)
console.log("\nEx4 d): " + emparelhar([1, 2.1, 4], [5, -2, 3]))
console.log("\nEx4 d): " + emparelhar([1, 2], [3]))