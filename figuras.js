//*Cuadrado

console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("El lado del cuadrado es: " + ladoCuadrado + "cm");

//const perimetroCuadrado = (ladoCuadrado * 4);
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

//const areaCuadrado = (ladoCuadrado * ladoCuadrado);
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd("Cuadrado");


//*Triangulo

console.group("Triangulo");

//const ladoTriangulo1 = 6;
//console.log("El lado1 del triangulo es: " + ladoTriangulo1 + "cm");

//const ladoTriangulo2 = 6;
//console.log("El lado2 del triangulo es: " + ladoTriangulo2 + "cm");

//const baseTriangulo = 4;
//console.log("La base del triangulo es: " + baseTriangulo + "cm");

//const alturaTriangulo = 5.5;
//console.log("La altura del Triangulo es: " + alturaTriangulo + "cm");

//const perimetroTriangulo = (ladoTriangulo1 + ladoTriangulo2 + baseTriangulo);
//console.log("El perímetro del Triangulo es " + perimetroTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    const perimetro = lado1 + lado2 + base;
    return perimetro;
}

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El área del Triangulo es: " + areaTriangulo + "cm^2");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd("Triangulo");


//*Circulo

console.group("Circulo");

//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");

//const diametroCirculo = radioCirculo * 2;
//console.log("El radio del circulo es: " + diametroCirculo + "cm");

function diametroCirculo(radio){
    return radio * 2;
}

const pi = Math.PI;
console.log("PI es: " + pi);

//const perimetroCirculo = diametroCirculo * pi;
//console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

//const areaCirculo = (radioCirculo * radioCirculo) * pi;
//console.log("El área del circulo es: " + areaCirculo + "cm^2");

function areaCirculo(radio) {
    return (radio * radio) * pi;
}

console.groupEnd("Circulo");


//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("InputBase");
    const input4 = document.getElementById("InputAltura");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const value4 = input4.value;

    const area = areaTriangulo(value3, value4);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("InputBase");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularDiametro(){
    const inputDiametro = document.getElementById("InputRadio");
    const value = inputDiametro.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}