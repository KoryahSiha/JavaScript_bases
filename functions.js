// 1
function entier(number) {
    // cette fonction permet de savoir si un nombre entier est pair ou impair.
    // number est un nombre entier.
    // return renvoie si le nombre est pair ou impair.
    if ((typeof(number) == 'object') || number % 2 === 0) {
        return "C'est un nombre pair";
    } else {
        return "C'est un nombre impair";
    };
}

console.log(entier(49))



// 2
function addNumbersInt(numbers) {
    // cette fonction permet d'additioner plusieurs nombres dans un tableau.
    // numbers sont des nombres entiers.
    // result renvoie la somme de tous les nombres du tableau.
    let result = 0;
    if ((typeof(numbers) !== 'object') || numbers.length <= 1) {
        return "Les paramètres sont mal définis";
    }
    numbers.forEach((number) => {
        result+=number;
    });

    return result;
}

console.log(addNumbersInt([4, 85, 25, 94]))



// 3
function stringReversed(str) {
    // cette fonction permet d'inverser une chaîne de caractères.
    // str est une chaîne de caractère.
    // return renvoie la chaîne de caractère inversée.
    return str.split("").reverse().join("");
}

console.log(stringReversed("Je suis un robot"))