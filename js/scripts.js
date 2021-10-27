function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

function consonant (string) {
  for ( let i = 0; i < string.length; i++) {
    if (["a", "e", "i", "o", "u"].indexOf(string[i]) > -1 ) {
      let first = string.slice(0, i);
      let middle = string.slice(i, string.length);
      string = middle + first ;
      stringArr = string.split("");
      if (stringArr[stringArr.length - 1] === "q" && stringArr[0] === "u") {
        stringArr.push(stringArr[0])
        stringArr.shift();
        stringArr.join();
        return stringArr.join("") + "ay";
      }
      return  string + "ay"
    }
  }
}



function pigLatin(string) {
  const stringArr = string.toLowerCase().split("");
  if (stringArr[0] === "a" || stringArr[0] === "e" || stringArr[0] === "i" || stringArr[0] === "o" || stringArr[0] === "u") {
    return (string.concat("way"));
  }
  else {
    return consonant(string);
  }
}

function quMove(string) {
  for (let i = 0; i < string.length; i++) {
      if (string.includes("qu")){
          string = string.substring(i) + string.substring(0,i);
          console.log(string);
      }                                          
  }
  return string;
}