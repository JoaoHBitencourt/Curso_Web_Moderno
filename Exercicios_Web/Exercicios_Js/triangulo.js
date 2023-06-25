function triangulo(a, b, c){
    if(a == b && a == c){
        console.log("Triângulo equilátero")
    }
    else if (a == b || a == c || b == c){
        console.log("Triângulo isósceles")
    }
    else{
        console.log("Triângulo escaleno")
    }
}

triangulo(10, 10, 10);
triangulo(10, 5, 10);
triangulo(3, 4, 5);