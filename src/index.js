const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let result = '';

  for (let i = 0; i < expr.length; i += 10) {
    let chunk = expr.slice(i, i + 10);

    if (chunk === '**********') {
      result += ' ';
      continue;
    }

    let morseCode = '';
    for (let j = 0; j < chunk.length; j += 2) {
      let symbol = chunk.slice(j, j + 2);
      if (symbol === '10') {
        morseCode += '.';
      } else if (symbol === '11') {
        morseCode += '-';
      }
    }

    result += MORSE_TABLE[morseCode];
  }

  return result;
}

module.exports = {
  decode,
};
