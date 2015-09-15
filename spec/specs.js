describe('pigLatin', function(){
  it("attaches consonents and ay to end of word", function() {
    expect(pigLatin("group")).to.equal("oupgray");
  });

  it("just adds 'ay' to end when word starts with vowel", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("moves 'u' to end of word along with 'q'", function() {
    expect(pigLatin("squeal")).to.equal("ealsquay");
  });

  it("treats 'y' as a vowel in middle of word", function() {
    expect(pigLatin("rhythm")).to.equal("ythmrhay");
  });
});


describe('checkIfVowel', function() {
  it("returns true when given a vowel", function() {
    expect(checkIfVowel("e")).to.equal(true);
  });

  it("returns false when given a consonant", function() {
    expect(checkIfVowel("p")).to.equal(false);
  });
});

describe('checkIfY', function() {
  it("returns true when 'y'", function() {
    expect(checkIfY("y")).to.equal(true);
  });

  it("returns false when not 'y'", function() {
    expect(checkIfY("p")).to.equal(false);
  });
});

describe('checkIfQU', function() {
  it("returns true when starts with 'qu'", function() {
    expect(checkIfQU("quiet")).to.equal(true);
  });

  it("returns false when doesn't start with 'qu'", function() {
    expect(checkIfQU("pickle")).to.equal(false);
  });
});

describe('returnFirstLetter', function() {
  it("returns first letter of a word", function() {
    expect(returnFirstLetter("cat")).to.equal("c");
  });
});

describe('removeFirstLetter', function() {
  it("removes first letter of a word", function() {
    expect(removeFirstLetter("cat")).to.equal("at");
  });
});

describe('appendLetterToEnd', function() {
  it("appends given letter to end of given word", function() {
    expect(appendLetterToEnd("at", "c")).to.equal("atc");
  });
});

describe('addAy', function() {
  it("adds 'ay' to the end of a string", function() {
    expect(addAy("atc")).to.equal("atcay");
  });
});
