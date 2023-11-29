//je veux échanger la valeur de "input" par la valeur de "transform"

let transform = "🌟💌🌸💖";

// function getValue() {
//   let input = document.getElementById("input").value;
//   input = transform;
//   console.log(input);
// }
// getValue();

//je veux créer un tableau qui contiendra une suite de mots, 
//ces mots seront comparés avec la valeur de l'input 
//la valeur de l'input sera changée si il y a correspondance

let forbiddenWords = "oli" 
//["azerty", "caramel", "santa", "téléportation"];

function swapForbiddenWords() {
    let input = document.getElementById("input").value;
    if(input == forbiddenWords){
        input = transform
        console.log(input)

    }else{
        console.log(input)
    }
    return input
    
}

swapForbiddenWords();
