const { scrambleWord, newPuzzle, checkGuess, showHint, showMessage } = require('./function');

describe('scrambleWord', () => {
  it('returns a scrambled version of the word', () => {
    const word = 'testing';
    const scrambled = scrambleWord(word);
    expect(scrambled).not.toBe(word);
    expect(scrambled.length).toBe(word.length);
    expect(scrambled.split('').sort().join('')).toBe(word.split('').sort().join(''));
  });
});

describe('newPuzzle', () => {
  it('returns a puzzle object with original and scrambled', () => {
    const puzzle = newPuzzle(['apple']);
    expect(puzzle).toHaveProperty('original', 'apple');
    expect(puzzle).toHaveProperty('scrambled');
    expect(puzzle.scrambled).not.toBe('apple');
  });
});

describe('checkGuess', () => {
  it('returns true for correct guess', () => {
    expect(checkGuess('apple', 'apple')).toBe(true);
  });
  it('returns false for incorrect guess', () => {
    expect(checkGuess('banana', 'apple')).toBe(false);
  });
});

describe('showHint', () => {
  it('returns a hint string', () => {
    expect(showHint('banana')).toBe('b_____');
  });
});

describe('showMessage', () => {
  it('returns correct message for correct answer', () => {
    expect(showMessage('Correct!', true)).toBe('✅ Correct!');
  });
  it('returns correct message for incorrect answer', () => {
    expect(showMessage('Try again.', false)).toBe('❌ Try again.');
  });
});