// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //add promts
  var userChoicelength = window.prompt("How long do you want your password to be (8-128 charcters)?");
  console.log(userChoicelength)
  var userChoicecharacter = window.prompt("Do you want to include lowercase, uppercase, numeric, and special characters (Yes or no)?");
  console.log(userChoicecharacter)

  //add if statements based off of promts
  //variables for the password
  if (userChoicecharacter == "Yes") {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  };
  if (userChoicecharacter != "Yes") { var chars = "abcdefghijklmnopqrstuvwxyz" };

  var passwordLength = userChoicelength;
  var password = "";

  //loop for the password generator
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

