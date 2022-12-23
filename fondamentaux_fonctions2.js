const nombreSaisi = prompt("Veuillez saisir un nombre entier compris en 1 et 10.");

console.log(nombreSaisi)



if (nombreSaisi < 1 || nombreSaisi > 10) {
    alert("Veuillez saisir un nombre entier compris en 1 et 10.");
    // ce message est envoyé si le nombre n'est pas compris entre 1 et 10.
    prompt("Veuillez saisir un nombre entier compris en 1 et 10.");
    // ce message est envoyé de nouveau afin que l'utilsateur saisisse bien un nombre compris entre 1 et 10.
}



for (let i = 1; i <= 10; i++) {
    result = nombreSaisi * i;
    console.log(`${nombreSaisi} * ${i} = ${result}`);
    // cette boucle permet d'afficher la table de multiplication du nombre saisi par l'utilisateur.
}



function tableDeMultiplication(nombreSaisi) {
    // cette fonction permet d'afficher la table de multiplication de 1 à 10 d'un nombre.
    // chiffreSaisi contient un nombre entier compris entre 1 et 10.
    // return renvoie la table de multiplication du chiffre saisi.
    for (let i = 1; i < 10; i++) {
        result = nombreSaisi * i;
        console.log(`${nombreSaisi} * ${i} = ${result}`);
    }
}

console.log(tableDeMultiplication(nombreSaisi))
