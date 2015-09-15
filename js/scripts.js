var pigLatin = function(sentence) {
  sentence = removePunctuationAndMakeLowerCase(sentence);
  var wordArray = breakSentenceIntoWords(sentence);
  var pigLatinSentence = "";
  var goodSentence = true;
  wordArray.forEach(function(word) {
    if (!containsVowel(word)) {
      goodSentence = false;
    } else {
      pigLatinSentence = pigLatinSentence + pigLatinWord(word) + " ";
    }
  });
  if (goodSentence) {
    return pigLatinSentence;
  } else {
    return "I see no vowels. Are you sure that's a sentence?";
  }
}

var pigLatinWord = function(word) {
  if (checkIfY(returnFirstLetter(word))) {
    var letter = returnFirstLetter(word);
    word = appendLetterToEnd(removeFirstLetter(word), letter);
  }
  while (!checkIfVowel(returnFirstLetter(word))) {
    if (checkIfQU(word)) {
      word = word.slice(2) + "qu";
    } else {
      var letter = returnFirstLetter(word);
      word = appendLetterToEnd(removeFirstLetter(word), letter);
    }
  }
  return addAy(word);
}

var removePunctuationAndMakeLowerCase = function(sentence) {
  return sentence.replace(/[^\w\s]|_/g, "").toLowerCase();
}

var containsVowel = function(word) {
  for (var i = 0; i < word.length; i++) {
    if (checkIfVowel(word[i])) {
      return true;
    }
  }
  return false;
}

var checkIfVowel = function(letter) {
  letter = letter.toLowerCase();
  if (letter === "a" || letter === "e" || letter === "i"
        || letter === "o" || letter === "u" || letter === "y") {
    return true;
  } else {
    return false;
  }
}

var checkIfY = function(letter) {
  return letter === "y";
}

var checkIfQU = function(word) {
  var firstTwo = word.slice(0,2);
  if (firstTwo === "qu") {
    return true;
  } else {
    return false;
  }
}

var returnFirstLetter = function(word) {
  return word.slice(0,1);
}

var removeFirstLetter = function(word) {
  return word.slice(1);
}

var appendLetterToEnd = function(word, letter) {
  return word + letter;
};

var addAy = function(word) {
  return word + "ay";
}

var breakSentenceIntoWords = function(sentence) {
  sentence = sentence.split(" ").filter(function(string) {
    return string !== "";
  });
  return sentence;
}

$(document).ready(function() {
  $("form#english-sentence").submit(function(event) {
    var sentence = $("input#input").val();
    var result = pigLatin(sentence);

    $(".sentence").text(result);

    $("#newsentence").show();
    event.preventDefault();
  });
});
