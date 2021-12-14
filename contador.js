let numeroDeCandidatos = 20;

let contador = 0;

while(contador<= numeroDeCandidatos){
    //console.log(contador)

    if(contador == 0){
        console.log("o numero atual é zero")
    } else if(contador % 2 == 0){
        console.log(`O número ${contador} é Par`)
    }else{
        console.log(`O número ${contador} é Impar`)
    }
    contador++;
}