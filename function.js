// Scrambles the letters of a word
function scrambleWord(word) {
  if (!word) return '';
  let arr = word.split('');
  let scrambled = arr.slice();
  while (scrambled.join('') === word && word.length > 1) {
    scrambled = arr.slice().sort(() => Math.random() - 0.5);
  }
  return scrambled.join('');
}

// Returns a new puzzle object
function newPuzzle(wordList = ['apple', 'banana', 'orange']) {
  const original = wordList[Math.floor(Math.random() * wordList.length)];
  const scrambled = scrambleWord(original);
  return { original, scrambled };
}

// Checks if the guess matches the original word
function checkGuess(guess, original) {
  return guess.trim().toLowerCase() === original.trim().toLowerCase();
}

// Returns a hint (first letter + underscores)
function showHint(word) {
  if (!word) return '';
  return word[0] + '_'.repeat(word.length - 1);
}

// Returns a formatted message
function showMessage(msg, isCorrect) {
  return isCorrect ? `✅ ${msg}` : `❌ ${msg}`;
}

module.exports = { scrambleWord, newPuzzle, checkGuess, showHint, showMessage };