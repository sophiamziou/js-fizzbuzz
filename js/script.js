
// 1- Creo un ciclo for da 1 a 100
for (let i = 1; i <= 100; i++) {
    //SE il numero è sia multiplo di 3 che di 5 stampo “FizzBuzz”
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    //SE il numero è un multiplo di 5 stampo “Buzz”
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    //SE il numero è un multiplo di 3 stampo “Fizz”
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else {
        console.log(i);
    }
}



