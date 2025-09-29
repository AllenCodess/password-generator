const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("passwordone")
let passwordTwoEl = document.getElementById("passwordtwo")
let resetPasswordEl = document.getElementById("resetP")
// passwordOneEl.textContent = "Testing to see if this works"
// passwordTwoEl.textContent = "Testing this as well"

function generateP() {
    let password1 = "" // need an empty string so I can accumulate multiple chracters 
    let password2 = ""

   for (let i = 0; i < 15; ++i) {
        
    let randomCharacter = Math.floor(Math.random() * characters.length)
    let randomCharacterTwo = Math.floor(Math.random() * characters.length)
    password1 += characters[randomCharacter]
    password2 += characters[randomCharacterTwo]

}

   passwordOneEl.textContent = password1
   passwordTwoEl.textContent = password2
}


function resetPasswords() {
    passwordOneEl.textContent = ""
    passwordTwoEl.textContent = ""
}