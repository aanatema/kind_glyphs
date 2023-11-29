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

function usersForbiddenWords(){

}
usersForbiddenWords();

let forbiddenWords = ["caramel", "santa", "azerty", "téléportation"];


function swapForbiddenWords() {
  let input = document.getElementById("input").value;

  //boucle for pour itérer sur le tableau et comparer chaque élément avec la valeur de l'input
  for (let i = 0; i < forbiddenWords.length; i++) {
    if (input == forbiddenWords[i]) {
      input = transform;
      console.log(input);
      break;
    } else {
      console.log(input);
    }
  }
  //affiche la dernière addition et ce par quoi le mot va être remplacé
  document.getElementById('input_value').innerHTML = input;
  document.getElementById('emoji_suite').innerHTML = transform;
}
swapForbiddenWords();

//cette fonction permet d'afficher les mots que l'utilisateur.ice aura renseigné
function showUsersForbiddenWords(){


}
showUsersForbiddenWords();

//je souhaite faire apparaître le dernier input sur le html et montrer ce pas quoi il va être remplacé.