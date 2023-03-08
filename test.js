// Função para a questão 2:
const isInFibonacci = (num) => {
    let prev = 0;
    let next = 1;
    let acc = 0;
    if(num === 0) {
        return console.log(`${num} pertence a sequência de Fibonacci`); 
    }
    while(acc <= num) {
        acc = prev + next;
        next = prev;
        prev = acc
        if(acc === num) {
            return console.log(`${num} pertence a sequência de Fibonacci`); 
        }
    }
    return console.log(`${num} não pertence a sequência de Fibonacci`); 
}

// Função para a questão 5:
const reverseString = (string) => {
    let lastIndex = string.length - 1;
    let reverseStr = ''
    for (lastIndex; lastIndex >= 0 ; lastIndex -= 1) {
        reverseStr += string[lastIndex];
    }
    return console.log(reverseStr);
}
