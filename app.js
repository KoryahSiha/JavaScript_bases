// définition de variables
let nom = "John";
console.log(nom);

nom = "Jane";
console.log(nom);


// boucles
for (let i=1;i<=10;i++) {
console.log(i);
}


// console.log()
console.log("Bonjour tout le monde !")
console.log(3 + 4)
console.log(nom)


// concaténation de chaînes de caractères
let firstName = "John";
let lastName = "Doe";
let complete = `${firstName} ${lastName}`;
console.log(complete)


// conditions
let age = 34;

if (age>=18) {
console.log("Vous êtes majeur")
} else {
console.log("Vous êtes mineur")
}


// avancé

// création et parcours d'un tableau
let couleurs = ["rouge", "vert", "bleu", "jaune", "orange"]
for (let i = 0; i < couleurs.length; i++) {
console.log(couleurs[i])
}


// utilisation de Array.push() et Array.pop()
let numbers = [1, 2, 3, 4, 5]
numbers.push(6);
numbers.pop();
console.log(numbers)
