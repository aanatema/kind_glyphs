//PREMIERE ETAPE

//je veux échanger la valeur de "input" par la valeur de "transform"
// function getValue() {
//   let input = document.getElementById("input").value;
//   input = transform;
//   console.log(input);
// }
// getValue();

//DEUXIEME ETAPE
//je veux créer un tableau qui contiendra une suite de mots,
//ces mots seront comparés avec la valeur de l'input
//la valeur de l'input sera changée si il y a correspondance

let transform = "🌟💌🌸💖";
let forbiddenWords = ["caramel", "santa", "azerty","téléportation"];

function swapForbiddenWords() {
  let input = document.getElementById("input").value;

  //boucle for pour itérer sur le tableau et comparer chaque élément avec la valeur de l'input
  for (let i = 0; i < forbiddenWords.length; i++) {
    if (input == forbiddenWords[i]) {
        input = transform;
        console.log(input);
     //le break permet de sortir de la boucle si il y a correspondance
      break;
    } else{
        console.log(input)
    }
    
  }
}

swapForbiddenWords();
