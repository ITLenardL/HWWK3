// Variables for each type of character class with a variable to split to create password array//

var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "~!@#$%^&*()-=+{}<>,.?";
var symArr = sym.split("");

// The function to place all characters into for final password

function generatePass(){
    var allChars = [];
    var resultPass = "";

// Prompts and confirms for conditions of length & include/exclude character classes

var pwLength = prompt("How many characters would you like your password to be?");
    if(pwLength <8 || pwLength > 128) {
    alert("Password must be between 8 and 128 characters long!");
}
    else{
        if(confirm("Would you like your password to contain upper case letters?")){
        Array.prototype.push.apply(allChars, abcUpperArr);
    }

        if(confirm("Would you like your password to contain lower case letters?")){
        Array.prototype.push.apply(allChars, abcLowerArr);
    }

        if(confirm("Would you like your password to contain numbers?")){
        Array.prototype.push.apply(allChars, numArr);
    }

        if(confirm("Would you like your password to contain symbols?")){
        Array.prototype.push.apply(allChars, symArr);
    }

        if(allChars.length===0){
        alert("No character type was selected, start again.");
    }

// Run the function to randomly select characters and add to the array

        else{
            for(var i=0; i<pwLength; i++){
                var random = Math.floor(Math.random()*allChars.length);
                resultPass += allChars[random];
            }
        }
    }

// Display in inner html the password

    document.getElementById("password").innerHTML = resultPass;
}

// Copy password to clipboard

function copyPass(){
    document.querySelector("textarea").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}