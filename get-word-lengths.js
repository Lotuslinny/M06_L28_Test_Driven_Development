const getWordLengths = function (someWords) {
  let length = [];
  let words = someWords.toString().split(",");
  for (let i = 0; i < words.length; i++) {
    length.push(words[i].length);
  }
  return length;


};

module.exports = getWordLengths;



