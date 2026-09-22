const passwordButton = document.getElementById("button");
const passwordInput = document.getElementById("passwordinput");
passwordButton.addEventListener("click", function() {

    const characters = 
    "abcdefghijklmnopqrstuvwxyz" +
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "0123456789" +
    "!@#$%^&*()-_=+[]{};:,.<>/?|`~";
let password = ""
for ( let i = 0; i < 16; i++) {
    const randomGenerator = Math.floor(Math.random() * characters.length)
    password += characters[randomGenerator];
    if (i === 16){
        break
    }
}
passwordInput.value = password;
})
