function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

function vowels(string) {
  const stringArr = string.toLowerCase().split("");
  if (stringArr[0] === "a" || stringArr[0] === "e" || stringArr[0] === "i" || stringArr[0] === "o" || stringArr[0] === "u") {
    return (string.concat("way"));

  }
  else {
    for ( let i = 0; i < string.length; i++) {
      if (["a", "e", "i", "o", "u"].indexOf(string[i]) > -1 ) {
        let first = string.slice(0, i);
        let middle = string.slice(i, string.length);
        string = middle + first + "ay";
        return string;
      }
    }
  }
}

for ( let i = 0; i < stringArr.length; i++) {
  if !(stringArr[i] === "a" || stringArr[i] === "e" || stringArr[i] === "i" || stringArr[i] === "o" || stringArr[i] === "u")

// for ( let i = 0; i < string.length; i++) {
//   if ( string[i].includes("qu")) {
//     var first = string.slice(0, i);
//     var middle = string.slice(i , string.length);
//     string = middle + first ;
//   }
// return string + "ay";
// }

// function quMove(string) {
//   for ( let i = 0; i < string.length; i++) {
//       if (string.includes("qu")){
//           string = string.substring(i) + string.substring(0,i);
//       }
//   }
//   return string + "ay";
// }
