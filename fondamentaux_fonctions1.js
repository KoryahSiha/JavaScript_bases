
const quantityOfNames = prompt("Combien de noms voulez-vous ?");

const names = [];

for (let i = 0; i < parseInt(quantityOfNames); i++) {
    names.push(prompt("Saisissez un nom."));  
    // cette boucle demande à l'utilisateur le nombre de noms qu'il souhaite saisir.
}
console.log(names)




let message = `Vous avez saisi ${quantityOfNames} noms : ${names}.`;

console.log(message)


if (quantityOfNames > 3) {
    console.log("Avec autant de compagnons, vous êtes prêts pour la Terre du Milieu !");
    // ce message est envoyé si le nombre de noms saisis est supérieur à 3.
}




function displayNames(names) {
    // cette fonction permet d'afficher un tableau de noms.
    // names contient des chaînes de caractères.
    // return renvoie les noms du tableau.
    for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
}

displayNames(names)