function rot13(encodedString) {
  var decodedString = "";

  for (var i = 0; i < encodedString.length; i++) {
    var charCode = encodedString.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // If it's an uppercase letter (A-Z)
      var decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
      decodedString += String.fromCharCode(decodedCharCode);
    } else {
      // Non-alphabetic characters
      decodedString += encodedString.charAt(i);
    }
  }

  return decodedString;
}
