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
let forbiddenWords = [];

//permet d'ajouter des mots à bannir
function usersForbiddenWords() {
  let input = document.getElementById("input").value;
  //remplacer à terme if par un switch
  if (input != "" || input != " ") {
    forbiddenWords.push(input);
    console.log(forbiddenWords);
  }
}
usersForbiddenWords();

//
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
}
swapForbiddenWords();

//cette fonction permet d'afficher les mots que l'utilisateur.ice aura renseigné
function showUsersForbiddenWords(){
    let input = document.getElementById("input").value;
    document.getElementById("emoji_suite").innerHTML = transform;
    document.getElementById("list").innerHTML = forbiddenWords;

}
showUsersForbiddenWords();
