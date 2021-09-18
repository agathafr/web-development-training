const aName = "Carlos";
const weight = 84;
const height = 1.88;

const imc = weight / (height * height);

if (imc >= 30) {
    console.log(`${aName}, you are overweight.`)
} 

if (imc < 29.9){
    console.log(`${aName}, you are not overweight.`)
}