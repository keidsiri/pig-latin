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
    return (string.append("way"));

  }
  else {
    return false ; // consonant
  }
}
