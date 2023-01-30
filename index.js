const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")
function generatePassword(){
    firstPassword.textContent = " "
    secondPassword.textContent = " "
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random()*characters.length)
        firstPassword.textContent += characters[randomIndex]
    }
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random()*characters.length)
        secondPassword.textContent += characters[randomIndex]
    }
}

let copyText = document.getElementById("first-password")

function copyPassword(){
   
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.textContent);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.textContent); 
}
