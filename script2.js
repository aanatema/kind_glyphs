//I retrieve the value of the HTML input
let htmlInput = document.getElementById("html_input");
//I activate the function saveForbiddenWord with an addEventListener
document.getElementById("save_button").addEventListener("click", saveForbiddenWord);

let franceEmojis = "🥦🌻🥦🌻🥦🌻🥦🌻";
let forbiddenWords = ['un'];
let inputValue = htmlInput;

//add new words
function saveForbiddenWord() {
  if (inputValue != "" && inputValue != " " && forbiddenWords.includes(inputValue) == false) {
    forbiddenWords.push(inputValue);
    console.log(forbiddenWords);
  }else{
    alert("it seems you have already banned this word")
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
//       console.log("scan and replace")
//     } else {}
//   }
// }
// scanAndReplace();


function swapForbiddenWord(){
    for(let i = 0; i < forbiddenWords.length; i++){
        if(inputValue == forbiddenWords[i]){
            inputValue.replace(franceEmojis)
        }else{}
        console.log(inputValue)
    }

}
swapForbiddenWord();