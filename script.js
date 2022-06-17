// Assignment code here //
function generatePassword() {
  
  var userInput=window.prompt("whats your password")
  var passwordLenght=parseInt(userInput);
  
  if(passwordLenght < 8 || passwordLenght > 128)  {
  window.alert("password need to be 8 and no more than 128 characters");
  return
 }
 
 
  var userWantNumber=window.confirm("do you want numbers? Yes or NO");
  
  var userWantSpecialCharacters=window.confirm("do you want special characters? Yes or NO");
  
  var userWantUpperCaseLetters=window.confirm("do you want upper case letters?Yes or No");

  var userWantLowerCaseLetters=window.confirm("do you want lower case letters? Yes or No")
  s
 }




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
