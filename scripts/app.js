function stringCutter(text) {
  const maxLength = 30;
  if (text.length <= maxLength) {
    return text;
  } else {
    const shortenedText = text.substring(0, maxLength - 3) + "...";
    return shortenedText;
  }
}

let firstSentence = "But you have no right to call me a murderer";
let secondSentence = "Because they could stand that these were not monsters.";
let thirdSentence = "And I want to remember it. I never want to forget it.";

console.log(stringCutter(firstSentence));
console.log(stringCutter(secondSentence));
console.log(stringCutter(thirdSentence));

function registerInversion(text) {
  let invertedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === char.toUpperCase()) {
      invertedText += char.toLowerCase();
    } else {
      invertedText += char.toUpperCase(); 
    }
  }
  return invertedText;
}

console.log(registerInversion('WTF'));
console.log(registerInversion('Be my Valentine'));
console.log(registerInversion('Hello  World!'));

function bannedLetters(sentence, bannedWord) {
  const regex = new RegExp(`\\b${bannedWord}\\b`, "gi");
  const bannedSentence = sentence.replace(regex, "******");
  return bannedSentence;
}

let oneSentence = "Follow the white raBbiT";
let twoSentence = "Call me Ishmael";
let threeSentence = "Repent before bloody rabbit punish you!";
let bannedWord = "rabbit";

console.log(bannedLetters(oneSentence, bannedWord));
console.log(bannedLetters(twoSentence, bannedWord));
console.log(bannedLetters(threeSentence, bannedWord));
