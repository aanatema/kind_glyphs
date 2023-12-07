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


let input = document.getElementById("button").addEventListener("click", saveForbiddenWord);
let swapInput = document.getElementById("button").addEventListener("click", swapForbiddenWords);
let showInput = document.getElementById("button").addEventListener("click", showUsersForbiddenWords);
let htmlInput = document.getElementById("html_input").value

//permet d'ajouter des mots à bannir
function saveForbiddenWord() { 

  //remplacer à terme if par un switch
  if (html_input != "" || html_input != " ") {
    forbiddenWords.push(html_input);
    console.log(forbiddenWords);
  }
  
}
console.log(saveForbiddenWord());


//
function swapForbiddenWords() {
let swap = document.getElementById("html_input").value;

  //boucle for pour itérer sur le tableau et comparer chaque élément avec la valeur de l'input
  for (let i = 0; i < forbiddenWords.length; i++) {
    if (swap == forbiddenWords[i]) {
      swap = transform;
      console.log(swap);
      break;
    } else {
      console.log(swap);
    }
  }
}
swapForbiddenWords();

//cette fonction permet d'afficher les mots que l'utilisateur.ice aura renseigné
function showUsersForbiddenWords(){
    document.getElementById("html_input").value = showInput;
    document.getElementById("emoji_suite").innerHTML = transform;
    document.getElementById("list").innerHTML = forbiddenWords;

}
showUsersForbiddenWords();
