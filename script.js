let space = "🛸👾🚀🪐🌠👨‍🚀☄️🛰️💫🌘";
let natureGreen = "🌳🌻🌿☘️🍃🌱🌲";
let flowers = "💐🌱🌷🌻🌹🌼🌸🪷";
let fruits = "🍇🍎🍌🍊🍓🥝🫐🍒🍋🍉🍑";
let franceEmojis = "🥦🌻🥦🌻🥦🌻🥦🌻";
let elineEmojis = "🐇🌽🐇🌽🐇🌽🐇🌽";
let autumn = "🦔🍂🍁🦉🌰🧡🎃🦊🍯🍄🐿️🪵";
let spring = "💐🧺🐇🌿🌷🦋🌼🌱🐝🐣";
let summer = "🍍🍧🦋☀️🌻🍉🌅🎐";
let winter = "🦌🎄🐇🌟❄️🕯️⛄🧣🐧🎠";
let love = "💗🎀💌💓🧸🕊️❤️💐🏹💕";

let transform = "🦔🍂🍁🎃🦊🍄🐿️";
let forbiddenWords = ["la", "de", "un"];

//déclenchement des fonctions
//déclenche la fonction saveForbiddenWord lorsque l'on clique sur le bouton "SaveButton"
let htmlInput = document.getElementById("html_input").value;
document.getElementById("save_button").addEventListener("click", saveForbiddenWord);


// document.getElementById("button").addEventListener("click", swapForbiddenWords);
// document.getElementById("show_button").addEventListener("click", showForbiddenWords);

//permet d'ajouter des mots à bannir
function saveForbiddenWord() {
  if (htmlInput != "" && htmlInput != " " && htmlInput != forbiddenWords ) {
    forbiddenWords.push(htmlInput);
    console.log("tableau fbw:", forbiddenWords);
  } else {
  }
}
saveForbiddenWord();

// permet d'iterer sur le contenu de la page et de voir si il y a des correspondances avec le tableau "forbiddenWords"
// function scanAndReplace() {
//   const text = document.querySelectorAll(
//     "h1",
//     "h",
//     "h3",
//     "h4",
//     "h5",
//     "h6",
//     "p"
//   );

//   for (let i = 0; i < text.length; i++) {
//     if (text[i].innerHTML.includes(forbiddenWords)) {
//       text[i].innerHTML = text[i].innerHTML.replace(transform);   
//     } else {
//     }
//   }
// }
// scanAndReplace();

// function swapForbiddenWords() {
//   //boucle for pour itérer sur le tableau et comparer chaque élément avec la valeur de l'input
//   for (let i = 0; i < forbiddenWords.length; i++) {
//     if (htmlInput == forbiddenWords[i]) {
//       htmlInput = transform;
//       console.log("show swaped html input:", htmlInput);
      
//     } else {
//       console.log("show non swaped html input:", htmlInput);
//     }
//   }
// }
// swapForbiddenWords();

// function showForbiddenWords() {
//   document.getElementById("forbidden_list").innerHTML = forbiddenWords;
// }

// //affiche la suite d'emojis actuellement séléctionnée
// document.getElementById("emoji_suite").innerHTML = transform;
