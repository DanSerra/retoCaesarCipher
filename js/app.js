function cipherArray (asciiCode) {
var alphabetArray = [];
for (var i = 0; i < 26 ; i++) {
var characther = String.charCodeAt ( i + asciiCode );
alphabetArray.push (characther);
}

// falta formula (x-65+n)%26+65

// function decipher
String.fromCharCode (65);
