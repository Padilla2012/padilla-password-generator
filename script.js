// Assignment code here //
function generatePassword() {
  
  var userInput=window.prompt("whats your password")
  var passwordLenght=parseInt(userInput);
  
  if(passwordLenght < 8 )  {
  window.alert("password need to be 8 or more charaters");
  return
 }
 
 else if(passwordLenght > 128){
   window.alert("needs to be no more than 128 characters");
   return
 }

 
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
