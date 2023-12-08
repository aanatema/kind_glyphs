
let transform = "🌟💌🌸💖";
let forbiddenWords = [];

//déclenchement des fonctions
let input = document.getElementById("button").addEventListener("click", saveForbiddenWord);
let swapInput = document.getElementById("button").addEventListener("click", swapForbiddenWords);
let showInput = document.getElementById("button").addEventListener("click", showUsersForbiddenWords);
let htmlInput = document.getElementById("html_input").value
console.log(htmlInput)
//permet d'ajouter des mots à bannir
function saveForbiddenWord() { 

  //remplacer à terme if par un switch
  if (htmlInput != "" || htmlInput != " ") {
    forbiddenWords.push(htmlInput);
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
    showInput = htmlInput;
    document.getElementById("emoji_suite").innerHTML = transform;
    document.getElementById("list").innerHTML = forbiddenWords;

}
showUsersForbiddenWords();
